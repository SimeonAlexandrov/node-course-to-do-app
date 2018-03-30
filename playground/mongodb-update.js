// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')


    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5abce043457d2a30e9932a4e')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    })

    client.close();
});
