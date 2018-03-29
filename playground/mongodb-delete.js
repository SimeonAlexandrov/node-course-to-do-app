// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // delete many
    // db.collection('Todos')
    // .deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) => {
    //     console.log(res);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res)
    // })


    // db.collection('Users').deleteMany({name: 'simeon'}).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5abcafb6d00f96495db9557c')}).then((res) => {
        console.log(res);
    });

   //client.close();
});
