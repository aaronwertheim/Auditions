class Audition < ApplicationRecord
    belongs_to :show
    belongs_to :user

    validates :prefered_time, presence: true
    validates :user_id, uniqueness: {scope: :show_id}
end
