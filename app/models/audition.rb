class Audition < ApplicationRecord
    belongs_to :show
    belongs_to :user

    validates :full_name, presence: true
    validates :audition_time, presence: true, uniqueness: {scope: :show_id}
    validates :user_id, uniqueness: {scope: :show_id}
end
