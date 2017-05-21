class FollowersController < ApplicationController
  before_action :load_user, only: [:index]

  def index
    @title = "followers".capitalize
    @users = @user.followers.order(name: :desc).paginate page: params[:page],
      per_page: Settings.follow_entry_per_page
    render "users/show_follow"
  end
end
