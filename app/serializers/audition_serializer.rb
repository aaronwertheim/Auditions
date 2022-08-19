class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :show_id, :desired_role, :audition_time, :file_url, :resume_url

  belongs_to :show
  belongs_to :user
end
