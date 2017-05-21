class LessonsController < ApplicationController
  before_action :logged_in_user, except: [:new, :create]
  before_action :load_category, :verify_enough_word, only: [:create]
  before_action :load_lesson, except: [:new, :create, :index]

  def show
  end

  def create
    @lesson = current_user.lessons.build category_id: @category.id
    if @lesson.save
      flash[:success] = "Create lesson success!"
       add_activity Activity.action_types[:start_lesson], @lesson
      redirect_to @lesson
    else
      flash.now[:danger] = "Create lesson failed!"
      redirect_to @category
    end
  end

  def edit
  end

  def update
    if @lesson.update_attributes lesson_params
      flash[:success] = "Lesson submit success!"
      add_activity Activity.action_types[:finish_lesson], @lesson
    else
      if @lesson.present?
        failed_message = @lesson.errors
      else
        failed_message = "Lesson submit failed!"
      end
      flash[:danger] = failed_message
    end
    redirect_to @lesson
  end

  def destroy
    if @lesson.destroy
      flash[:success] = "Deleted lesson success!"
      add_activity Activity.action_types[:destroy_lesson], @lesson
    else
      flash[:danger] = "Deleted lesson failed!"
    end
    redirect_to @lesson.category
  end

  private
  def lesson_params
    params.require(:lesson).permit :is_complete, results_attributes: [:id, :answer_id]
  end

  def load_lesson
    @lesson = Lesson.find_by id: params[:id]
    if @lesson.nil?
      flash[:danger] = "Lesson isn't found"
      redirect_to categories_path
    end
  end

  def verify_enough_word
    min = Settings.word_of_lesson_limit
    unless @category.words.size >= Settings.word_of_lesson_limit
      flash[:danger] = "Don't enough vocabulary to create a lesson. \
        Require more than #{min} words."
      redirect_to categories_path
    end
  end
 end
