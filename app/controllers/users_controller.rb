class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
      render json: User.all
    end

    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: @current_user, status: :created
    end

    def find_user
      render json: User.find(params[:id])
    end

    def update_unread
      user = User.find(params[:id])
      render json: user.update!(user_params)
    end

    private

    def user_params
      params.permit(:username, :first_name, :last_name, :password, :password_confirmation, :role, :unread)
    end
end
