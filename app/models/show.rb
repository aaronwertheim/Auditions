class Show < ApplicationRecord
    has_many :auditions
    has_many :users, through: :auditions

    validates :audition_date, presence: true
    validates :title, presence: true
end
