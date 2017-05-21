class Admin::CategoriesController < ApplicationController
  before_action :logged_in_user, :verify_admin
  before_action :load_category, except: [:new, :create, :index]

  def index
    @categories = Category.search(params[:name]).order(name: :desc)
    .paginate page: params[:page], per_page: Settings.admin_category_limit
  end

  def new
    @category = Category.new
  end

  def create
    @category =   Category.new category_params
    if @category.save
      flash[:success] = "Create category success!"
      redirect_to new_admin_category_path
    else
      flash.now[:danger] = "Create category failed!"
      render "new"
    end
  end

  def show
    @words = @category.words.order(created_at: :desc)
    .paginate page: params[:page], per_page: Settings.admin_word_limit
  end

  def edit
  end

  def update
    if @category.update_attributes category_params
      flash[:success] = "Updated category success!"
      redirect_to admin_categories_path
    else
      flash.now[:danger] = "Updated category failed!"
      render "edit"
    end
  end

  def destroy
    if @category.destroy
      flash[:success] = "Deleted category success!"
    else
      flash[:danger] = "Deleted category failed!"
    end
    redirect_to admin_categories_path
  end

  private
  def category_params
    params.require(:category).permit :name, :description, :photo
  end
end
