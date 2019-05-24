var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "database"
});

app.get('/posts', function (req, res) {    
    
    var sql = "SELECT * FROM posts";
    con.query(sql, function (err, result) {
        if (err){
            res.end(JSON.stringify(err));
        }
        res.end(JSON.stringify(result));
    });

});

app.post('/posts', function (req, res) {
    
    var sql = "INSERT INTO posts (title,name,body) VALUES ('"+req.body.title+"', '"+req.body.name+"', '"+req.body.body+"')";
    con.query(sql, function (err, result) {
        if (err){
            res.end(JSON.stringify(err));
        }
        res.end(JSON.stringify(result));
    });

});

app.put('/posts', function (req, res) {
    
    var set = new Array();
    if(req.body.title !== undefined){
        set.push("title = '"+req.body.title+"'");
    }
    if(req.body.name !== undefined){
        set.push("name = '"+req.body.name+"'");
    }
    if(req.body.body !== undefined){
        set.push("body = '"+req.body.body+"'");
    }
    var updateStr = set.join(", ");
    if(updateStr == ""){
        res.json({ success: true, msg: "Please enter at-least one value." });
    }else{
        var sql = "UPDATE posts SET "+updateStr+" WHERE id = "+req.body.id;
        con.query(sql, function (err, result) {
            if (err){
                res.end(JSON.stringify(err));
            }
            res.end(JSON.stringify(result));
        });
    }
});

app.delete('/posts/:id', function (req, res) {
    
    var sql = "DELETE FROM posts WHERE id = "+req.params.id;
    con.query(sql, function (err, result) {
        if (err){
            res.end(JSON.stringify(err));
        }
        res.end(JSON.stringify(result));
    });

})

var server = app.listen(8080, function () {
    console.log("listening..");
})