var express = require('express');  
var app = express();  
app.get('/getdata', function (req, res) {  
    // res.writeHead(200, {
    //     'Content-Type': 'text/'
    // });
    res.send('<p>Username: ' + req.query['name']+'</p><p>Lastname: '+req.query['age']+'</p>');  
    // res.write("<html><head><title>hii</title></head><body><h1>welcome </h1></body></html>"); 
  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
}); 