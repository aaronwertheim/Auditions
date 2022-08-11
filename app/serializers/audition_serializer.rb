class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :prefered_time, :user_id, :show_id

  belongs_to :show
  belongs_to :user
end
