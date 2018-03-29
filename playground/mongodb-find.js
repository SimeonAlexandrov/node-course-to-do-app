// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: ObjectID('5ab903acc17990036a0c441a')
    // })
    // .toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(docs);
    // }, (err) => {
    //     console.log('Unable', err);
    // });

    // db.collection('Todos').find({
    // })
    // .count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable', err);
    // });

    let userName = 'iva';
    db.collection('Users').find({
        name: userName
    }).toArray().then((users) => {
        console.log(`Users with name ${userName}: `);
        console.log(users)
    })


    client.close();
});
