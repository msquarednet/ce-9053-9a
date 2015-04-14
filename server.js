var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_world");

var PersonSchema = new mongoose.Schema({
    name: String
});

var Person = mongoose.model("Person", PersonSchema);

var app = express();
app.use(express.static(__dirname + "/client"));

app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
});


app.get("/people", function(req, res){
    res.render("index");
});

app.get("/things", function(req, res){
    res.render("index");
});

app.get("/api/people", function(req, res){
   Person.find({}, function(err, people){
       res.send(people); 
   }); 
});

app.listen(process.env.PORT);