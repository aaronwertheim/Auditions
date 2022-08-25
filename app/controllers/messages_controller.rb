class MessagesController < ApplicationController

    def index
        render json: Message.all
    end

    def create 
        render json: @current_user.messages.create!(message_params)
    end

    def destroy
        message = Message.find(params[:id])
        message.destroy
        head :no_content
    end

    private

    def message_params
        params.permit(:user_id, :recipient_id, :content)
    end

end
