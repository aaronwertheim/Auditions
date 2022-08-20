class AuditionsController < ApplicationController

    before_action :find_audition, only: [:show, :update, :destroy]

    def index
        render json: @current_user.auditions.includes(:show).order("shows.audition_date")
    end

    def show
        render json: @audition
    end

    def create
        render json: @current_user.auditions.create!(audition_params)
    end

    def update
        @audition.update!(audition_params)
        render json: @audition, status: :accepted
    end

    def destroy
        @audition.destroy
        head :no_content  
    end

    private

    def find_audition
        @audition = Audition.find(params[:id])
    end

    def audition_params
        params.require(:audition).permit(:show_id, :user_id, :desired_role, :audition_time, :headshot, :resume)
    end
end
