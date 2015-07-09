# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.delete_all
Bucketlist.delete_all
Item.delete_all

# Create User objects
user1 = User.create(email: "me@me.com", password: "password", admin: true)


# Create Bucketlist objects
bucketlist1 = Bucketlist.create(name: "Jen's Bucket List")


# Create Bucketlist Item objects
item2 = Item.create(number: 7, description: "swim with whale sharks", completed: false)
item3 = Item.create(number: 5, description: "photograph fireflies", completed: false)



bucketlist2 = Bucketlist.create({name: "jen's bucket list", user_id: user1.id})

item1 = Item.create({bucketlist_id: bucketlist1.id, number: 7, description: "swim with whale sharks", completed: false})

puts "seeded!"
