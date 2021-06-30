//Um documento no MongoDB é o mesmo que um registro no MySQL
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = {name: "Evandro", address: "Avenida Paulista, 100"};
    dbo.collection("customers").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 Document Inserted!");
        db.close();
    });    
});