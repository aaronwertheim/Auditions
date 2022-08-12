class CreateAuditions < ActiveRecord::Migration[7.0]
  def change
    create_table :auditions do |t|
      t.string :availability
      t.string :full_name
      t.string :desired_role
      t.integer :user_id
      t.integer :show_id

      t.timestamps
    end
  end
end
