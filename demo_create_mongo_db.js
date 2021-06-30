var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

/*
    No MongoDB, um banco de dados não é criado até obter conteúdo!
    Ou seja, esse arquivo não irá efetivamente criar um banco de dados!
*/