class ShowsController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Show.order(:audition_date)
    end

    def show
        render json: Show.find(params[:id])
    end
    
    def create
       render json: Show.create!(show_params)
    end

    def update
        show = Show.find(params[:id])
        show.update!(show_params)
        render json: show, status: :accepted
    end

    def show_with_auditions
        show = Show.find(params[:id])
        render json: show.auditions.order(:audition_time)
    end

    def destroy
        show = Show.find(params[:id])
        show.destroy
        show.auditions.destroy_all
        head :no_content  
    end
    
    private
    
    def show_params
        params.permit(:title, :poster_url, :company, :description, :user_id, :audition_date, :start_time, :end_time, :timeslot)
    end
end
