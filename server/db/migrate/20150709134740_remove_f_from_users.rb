class RemoveFFromUsers < ActiveRecord::Migration
  def change
  	remove_column :users, :f
  end
end
