class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :role, :first_name, :last_name, :unread
  
end
