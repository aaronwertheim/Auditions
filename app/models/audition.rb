class Audition < ApplicationRecord
    belongs_to :show
    belongs_to :user

    validates :full_name, presence: true
    validates :availability, presence: true
    validates :user_id, uniqueness: {scope: :show_id}
end
