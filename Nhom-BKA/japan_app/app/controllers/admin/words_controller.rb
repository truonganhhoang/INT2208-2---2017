class Admin::WordsController < ApplicationController
  before_action :logged_in_user, :verify_admin
  before_action :load_category, only: [:new]
  before_action :load_word, except: [:new, :create, :index]

  def new
    @word = @category.words.build
  end

  def create
    @word = Word.new word_params
    if @word.save
      flash[:success] = "Create word success!"
      redirect_to [:admin, @word.category]
    else
      flash.now[:danger] = "Create word failed!"
      render "new"
    end
  end

  def edit
  end

  def update
    if @word.update_attributes word_params
      flash[:success] = "Updated word success!"
      redirect_to admin_category_path @word.category.id
    else
      flash.now[:danger] = "Updated word failed!"
      render "edit"
    end
  end

  def destroy
    if @word.results.any?
      flash[:danger] = "Can't destroy the word, because having a lesson already started"
    elsif @word.destroy
      flash[:success] = "Word is deleted!"
    else
      flash[:danger] = "Word isn't deleted!"
    end
    redirect_to [:admin, @word.category]
  end

  private
  def word_params
    params.require(:word).permit :content, :category_id,
      answers_attributes: [:id, :content, :is_correct, :_destroy]
  end

  def load_word
    @word = Word.find_by id: params[:id]
    if @word.nil?
      flash[:danger] = "Word isn't found!"
      redirect_to admin_category_path
    end
  end
end
