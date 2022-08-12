class ShowsController < ApplicationController
    skip_before_action :authorize

    def index
        render json: Show.all
    end
    
    def create
       render json: Show.create!(show_params)
    end

    def show_with_auditions
        show = Show.find(params[:id])
        render json: show.auditions
    end
    
    private
    
    def show_params
        params.permit(:title, :poster_url, :company, :description, :user_id)
    end
end
