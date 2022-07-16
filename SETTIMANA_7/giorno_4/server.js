// npm init 
// npm i express --save

var express = require('express');
var app = express();

app.use(express.static(__dirname));


app.get('/', function (req, res) {
    res.render('index.html');
}) 


let port = 3000;
app.listen(port, function () {
    console.log('Server running at http://localhost:' + port);
});


