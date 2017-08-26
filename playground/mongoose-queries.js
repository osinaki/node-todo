const {
  ObjectId
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose')
const {
  Todo
} = require('./../server/models/todo')
const {
  User
} = require('./../server/models/user');

// var id = '59a17deaa8a5b9fa179d9a3b6';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo by Id', todo)
// }).catch((e) => console.log(e));

var id = '59a06da9c7bbca523d5c3aa2'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found.');
  }
  console.log('User by ID', user)
}).catch((e) => console.log(e));
