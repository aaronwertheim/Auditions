class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :show_id, :full_name, :desired_role, :availability

  belongs_to :show
  belongs_to :user
end
