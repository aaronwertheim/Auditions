class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.string :company
      t.string :title
      t.string :poster_url
      t.integer :user_id
      t.text :description
      t.date :audition_date
      t.string :start_time
      t.string :end_time
      t.integer :timeslot
      t.timestamps
    end
  end
end
