class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_url, :company, :description, :user_id, :audition_date

  has_many :auditions
end
