class User < ApplicationRecord
    has_many :auditions
    has_many :shows, through: :auditions

    validates :username, presence: true, uniqueness: true
    validates :role, :first_name, :last_name, presence: true

    has_secure_password
end
