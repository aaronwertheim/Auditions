class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_url, :company, :description, :user_id

  has_many :auditions
end
