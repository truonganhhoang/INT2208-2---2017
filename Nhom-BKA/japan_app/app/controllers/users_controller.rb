class UsersController < ApplicationController

  before_action :load_user, except: [:new, :create, :index]
  before_action :logged_in_user, except: [:new, :create]
  before_action :check_correct_user, except: [:new, :create, :index]

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      log_in @user
      flash[:success] = "Welcome to the Japanese-learning System"
      redirect_to @user
    else
      render :new
    end
  end

  def index
    @users = User.search(params[:name]).order(name: :desc).paginate page: params[:page],
      per_page: Settings.user_entry_per_page
  end

  def show
    @activities = Activity.feed_activities(current_user.id)
      .order(created_at: :desc).paginate page: params[:page],
        per_page: Settings.home_activities_limit
  end

  def edit
  end

  def update
    if @user.update_attributes user_params
      flash[:success] = "Profile updated !"
      redirect_to @user
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit :name, :email, :password, :password_confirmation, :phone, :address
  end
end
