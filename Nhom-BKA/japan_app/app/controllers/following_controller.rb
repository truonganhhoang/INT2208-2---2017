class FollowingController < UsersController
  before_action :load_user, only: [:index]

  def index
    @title = "following".capitalize
    @users = @user.following.order(name: :desc)
      .paginate page: params[:page], per_page: Settings.follow_entry_per_page
    render "users/show_follow"
  end
end
