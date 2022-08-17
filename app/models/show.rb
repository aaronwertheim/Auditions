class Show < ApplicationRecord
    has_many :auditions
    has_many :users, through: :auditions

    validates :audition_date, :title, :start_time, :end_time, :timeslot, presence: true
end
