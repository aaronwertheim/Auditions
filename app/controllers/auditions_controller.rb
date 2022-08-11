class AuditionsController < ApplicationController
    def index
        render json: @current_user.auditions
    end

    def create
        audition = @current_user.auditions.create!(audition_params)
        render json: audition, status: :created
    end

    private

    def audition_params
        params.permit(:prefered_time, :show_id, :user_id)
    end
end
