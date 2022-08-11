class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.string :company
      t.string :title
      t.string :poster_url
      t.text :description

      t.timestamps
    end
  end
end
