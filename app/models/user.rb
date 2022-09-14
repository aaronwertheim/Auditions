class User < ApplicationRecord
    has_many :auditions
    has_many :shows, through: :auditions
    has_many :messages

    validates :username, presence: true, uniqueness: true
    validates :role, :first_name, :last_name, presence: true
    validates :password, length: { minimum: 8 }, on: :create
    validate :password_requirements_are_met, on: :create

    has_secure_password

    def password_requirements_are_met
        rules = {
          " must contain at least one lowercase letter"  => /[a-z]+/,
          " must contain at least one uppercase letter"  => /[A-Z]+/,
          " must contain at least one digit"             => /\d+/,
          " must contain at least one special character" => /[^A-Za-z0-9]+/
        }
      
        rules.each do |message, regex|
          errors.add( :password, message ) unless password.match( regex )
        end
      end
end
