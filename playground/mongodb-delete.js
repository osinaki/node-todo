// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Users').findOneAndDelete({
    _id: new ObjectId("599f67e36387025f12daa482")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close;
});
