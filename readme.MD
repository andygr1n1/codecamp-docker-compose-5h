mongo

docker exec -it <name> bash
mongo -u <username> -p <password>

db
show dbs
db.books.insert({"name": "harry potter"})
db.books.find()
