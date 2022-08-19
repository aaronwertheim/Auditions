class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :show_id, :full_name, :desired_role, :audition_time, :file_url

  belongs_to :show
  belongs_to :user
end
