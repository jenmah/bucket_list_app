class AddUserIdToBucketlist < ActiveRecord::Migration
  def change
    add_column :bucketlists, :user_id, :integer
  end
end
