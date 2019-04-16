//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27019/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('ToDoApp');

    //findOneAndUpdate method using $set operator
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5cb5c871376f2ee1ce99f9bf')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndUpdate method using $set and $inc (https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc)
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5cb5beebabd6e6637f8bd777')
    }, {
        $set: {
            name: 'T\'Chala'
        },
        $inc: {
            age: 20
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //Doesnt work with promises
    //client.close();
});