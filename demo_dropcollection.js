var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");

    // Exclua a coleção "clientes", usando dropCollection ()
    dbo.dropCollection("customers", function(err, delOK){
        if(err) throw err;
        if(delOK) console.log("Collection Deleted");
        db.close();
    });
});