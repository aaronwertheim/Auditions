class User < ApplicationRecord
    has_many :auditions
    has_many :shows, through: :auditions

    validates :username, presence: true, uniqueness: true

    has_secure_password
end
