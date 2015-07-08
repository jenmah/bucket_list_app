class AddBucketlistToUser < ActiveRecord::Migration
  def change
    add_column :users, :bucketlist_id, :integer
  end
end
