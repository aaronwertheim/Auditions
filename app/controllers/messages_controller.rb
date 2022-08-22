class MessagesController < ApplicationController

    # skip_before_action :authorize, only: :index

    def index
        render json: Message.all
    end

    def create 
        render json: @current_user.messages.create!(message_params)
    end

    private

    def message_params
        params.permit(:user_id, :recipient_id, :content)
    end

end
