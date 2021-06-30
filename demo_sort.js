// Use o sort()método para classificar o resultado em ordem crescente ou decrescente.
// O sort()método usa um parâmetro, um objeto que define a ordem de classificação.

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    /*
        {nome: 1} // crescente
        {nome: -1} // decrescente   
    */
    // var mysort = {name: -1};
    var mysort = {name: 1};
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        db.close();
    });
});