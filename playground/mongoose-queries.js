const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

let id = '5accdc3ea94bf6614d80f371';
let userId = '5abe4d791bd1726edba8c161';
if(!ObjectID.isValid(id)) {
    return console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });


// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => {
//     console.log(e)
// });


//Usr findby Id

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('UserId not found')
  }
  console.log('User by id', user);
}).catch((e) => console.log(e))
