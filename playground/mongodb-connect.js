// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect mongodb');
    }
    console.log('Connect to mongo db server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne(
    //     {
    //         text:'Something to do',
    //         completed:true
    //     },(err,result)=>{
    //         if(err){
    //             return console.log('Unable insert todo');
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     });
    // db.collection('users').insertOne({
    //     name:'liam',
    //     age:35,
    //     location:'bangkok'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable insert todo');
    //             }
    //             console.log(result.ops);
    // });

    client.close();
});