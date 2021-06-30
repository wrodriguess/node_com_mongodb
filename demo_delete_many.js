var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    // Exclua todos os documentos onde o endereço começa com a letra "O"
    var myquery = {address: /^F/ };
    dbo.collection("customers").deleteMany(myquery, function(err, obj){
        if(err) throw err;
        console.log(obj.result.n + " Document(s) Deleted!");
        db.close();
    });
});