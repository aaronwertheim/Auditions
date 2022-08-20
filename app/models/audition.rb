class Audition < ApplicationRecord
    belongs_to :show
    belongs_to :user
    has_one_attached :headshot
    has_one_attached :resume

    validates :audition_time, presence: true, uniqueness: {scope: :show_id}
    validates :user_id, uniqueness: {scope: :show_id}
   

    def file_url
        Rails.application.routes.url_helpers.rails_blob_path(headshot, disposition: "attachment", only_path: true)
    end

    def resume_url
        Rails.application.routes.url_helpers.rails_blob_path(resume, disposition: "attachment",  only_path: true)
    end
end
