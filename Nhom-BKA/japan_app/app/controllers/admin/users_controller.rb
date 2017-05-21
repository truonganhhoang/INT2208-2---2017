class Admin::UsersController < ApplicationController
  before_action :logged_in_user, :verify_admin
  before_action :load_user, only: [:destroy]

  def index
    @users =  User.search(params[:name]).order(email: :desc).paginate page: params[:page],
      per_page: Settings.admin_user_entry_per_page
  end

  def destroy
    if @user.destroy
      flash[:success] = "User deleted !"
    else
      flash[:danger] = "User not deleted !"
    end
    redirect_to admin_users_path
  end
end
