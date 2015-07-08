class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :number
      t.string :description
      t.boolean :completed
      t.string :location

      t.timestamps null: false
    end
  end
end
