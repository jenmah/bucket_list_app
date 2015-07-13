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
user2 = User.create(email: "test@test.com", password: "password", admin: true)


# Create Bucketlist objects
# bucketlist1 = Bucketlist.create(name: "Jen's Bucket List")
# bucketlist2 = Bucketlist.create(name: "Test Bucket List")


# Create Bucketlist Item objects
# item2 = Item.create(number: 7, description: "swim with whale sharks", completed: false)
# item3 = Item.create(number: 5, description: "photograph fireflies", completed: false)



bucketlist1 = Bucketlist.create(name: "Jen's Bucket List")
bucketlist2 = Bucketlist.create(name: "Test Bucket List")

user1.bucketlist = bucketlist1
user2.bucketlist = bucketlist2

item1 = Item.create({bucketlist_id: bucketlist1.id, number: 1, description: "swim with whale sharks", completed: false})
item2 = Item.create({bucketlist_id: bucketlist1.id, number: 2, description: "photograph fireflies", completed: false})
item3 = Item.create({bucketlist_id: bucketlist1.id, number: 3, description: "create my own font", completed: false})
item4 = Item.create({bucketlist_id: bucketlist1.id, number: 4, description: "make this website work", completed: false})
item5 = Item.create({bucketlist_id: bucketlist1.id, number: 5, description: "live in london", completed: false})

item6 = Item.create({bucketlist_id: bucketlist2.id, number: 1, description: "swim with whale sharks", completed: false})
item7 = Item.create({bucketlist_id: bucketlist2.id, number: 2, description: "photograph fireflies", completed: false})
item8 = Item.create({bucketlist_id: bucketlist2.id, number: 3, description: "create my own font", completed: false})



puts "seeded!"
