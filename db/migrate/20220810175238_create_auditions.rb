class CreateAuditions < ActiveRecord::Migration[7.0]
  def change
    create_table :auditions do |t|
      t.string :full_name
      t.string :desired_role
      t.string :audition_time
      t.integer :user_id
      t.integer :show_id

      t.timestamps
    end
  end
end
