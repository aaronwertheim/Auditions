class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_url, :company, :description, :user_id, :audition_date, :start_time, :end_time, :timeslot

  has_many :auditions
end
