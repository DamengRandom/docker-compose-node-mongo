# Run A Simple Node API Locally by using Express + MongoDB + Docker

- Ths simple api app is just for the readers who need to get familiar with how to `dockerize` mongo + express API build locally. 

- The important part is to test node api locally in an `easier` and `faster` way without requiring a `real` mongodb setup !!! (If code is not very good, please leave me a comment at <a href="mailto:damonmaozewu@gmail.com" target="_blank">here</a>, and I'd love to polish it)


### (Docker time ~~) ###


### Prepare 📝📝📝

- Step 1: install npm packages

```js
npm install
or
npm i
```

- Step 2: setup local docker container 

```js
docker volume create --name=mongodata // create local volume for saving mongodb mock data locally   
docker volume ls // check how mu local volumns in your machine 
docker volume inspect mongodata // inspect and you can see the data folder saved path, eg: "Mountpoint": "/var/lib/docker/volumes/mongodata/_data",
```

- Step 3: setup local docker container 

```js
docker run --name=mongodblocal -v mongodata:/data/db -d -p 27017:27017 mongo // pull & run docker mongo image
docker exec -ti mongodblocal mongo // go to local mongo database
```

- Step 4: create local mongo database name, table name and mock data 

```js
show dbs // show all existing databases
use express_mongo_local // `express_mongo_local` is the database name we want to define
show collections // right now should be empty because we haven't create table and data yet
db.posts.insertOne({'description': 'mock data description'}) // `posts` is table name
// then use `insertOne` to create your first mock mongodb record
db.posts.find() // after created, you can find the record you just created
```

### Launch 🚀🚀🚀

- Start App:

```js
npm start
or
npm run start
```

- Then, open Postman:

```js
do actions like GET/POST/DELETE for API: localhost:4942/api/posts
```


### End of journey 🏃‍♂️🏃‍♀️👟
```js
docker ps // check mongodb container is whether still running or not if not, we can see the container hash
docker stop container-hash // stop the container and see you next time ~~
```

### References 👊👊👊
1. <a href="https://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/" target="_blank">MongoDB Quick Start</a>


Thanks for reading ~~
