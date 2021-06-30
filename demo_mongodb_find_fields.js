var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");

    // Retorne os campos "nome" e "endereço" de todos os documentos da coleção do cliente
    // O valor 0 em ID diz que não quero esse campo, já o valor 1 em name e address diz que quero o campo

    //Este exemplo excluirá "endereço" do resultado e trara todos os demais campos
    //dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    dbo.collection("customers").find({}, {projection: {_id: 0, name: 1, address: 1}}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        db.close();
    });
});