var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");

    //Busque TODOS os registros
    dbo.collection("customers").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        db.close();
    });
});


/*
    O find()método retorna todas as ocorrências na seleção.
    Nenhum parâmetro no método find () fornece o mesmo resultado que SELECT * no MySQL.
*/