class ShowsController < ApplicationController
    skip_before_action :authorize
    before_action :find_show, only: [:show, :update, :show_with_auditions, :destroy]
    
    def index
        render json: Show.where('audition_date > ?', Date.today).order(:audition_date)
    end

    def show
        render json: @show
    end
    
    def create
       render json: Show.create!(show_params)
    end

    def update
        @show.update!(show_params)
        render json: @show, status: :accepted
    end

    def show_with_auditions
        render json: @show.auditions.order(:audition_time)
    end

    def destroy
        @show.destroy
        @show.auditions.destroy_all
        head :no_content  
    end
    
    private

    def find_show
        @show = Show.find(params[:id])
    end
    
    def show_params
        params.permit(:title, :poster_url, :company, :description, :user_id, :audition_date, :start_time, :end_time, :timeslot)
    end
end
