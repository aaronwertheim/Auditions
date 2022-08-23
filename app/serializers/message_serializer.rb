class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipient_id, :content, :created_at

  belongs_to :user

  def created_at
    object.created_at.strftime("%m/%d/%Y at %I:%M%p")
  end

end
