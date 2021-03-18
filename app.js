var express = require("express");
var app = express();

PORT = 8080;

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("../public/home.ejs");
})

app.listen(PORT, function(){
    console.log(`The port is open at ${PORT}`);
})