const express = require("express");
const app = express();


app.get("/", function(req, rest){
    rest.send("")
});


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});