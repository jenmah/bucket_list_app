class AddBucketlistToUser < ActiveRecord::Migration
  def change
    add_reference :users, :bucketlist, index: true
    add_foreign_key :users, :bucketlists
  end
end
