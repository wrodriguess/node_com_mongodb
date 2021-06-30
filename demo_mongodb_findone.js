/* No MongoDB, usamos os métodos find e findOne para localizar dados em uma coleção.
Assim como a instrução SELECT é usada para localizar dados em uma tabela em um banco de dados MySQL. */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    
    //Encontre o primeiro documento da coleção de clientes
    dbo.collection("customers").findOne({}, function(err, result){
        if(err) throw err;
        console.log(result.name);
        db.close();
    });
});