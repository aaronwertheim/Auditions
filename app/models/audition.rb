class Audition < ApplicationRecord
    belongs_to :show
    belongs_to :user
    has_one_attached :headshot

    validates :full_name, presence: true
    validates :audition_time, presence: true, uniqueness: {scope: :show_id}
    validates :user_id, uniqueness: {scope: :show_id}
   

    def file_url
        Rails.application.routes.url_helpers.rails_blob_path(headshot, only_path: true)
    end
end
