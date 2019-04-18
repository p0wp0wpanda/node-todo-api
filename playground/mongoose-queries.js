const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '1235cb732952a4383234a371127'

if(!ObjectID.isValid(id)){
    console.log('Invalid ID');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(todo);
});

Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log('ID not found');
    }
    console.log(todo);
}).catch((err) => {
    console.log(err);
});