class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipient_id, :content

  belongs_to :user
end
