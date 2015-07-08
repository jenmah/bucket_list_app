class AddItemsToBucketlist < ActiveRecord::Migration
  def change
    add_reference :bucketlists, :item, index: true
    add_foreign_key :bucketlists, :items
  end
end
