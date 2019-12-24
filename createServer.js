var http = require('http');

http.createServer(function (req, res) {

    if (req.url == '/') {
        console.log("hiii you are in root");
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write("<html><head><title>hii</title></head><body><h1>welcome </h1></body></html>");

        res.end();

    } else if (req.url == '/data') {
        console.log("hello");
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write("hello you are in root");

        res.end();
    } else if (req.url == '/student') {
        console.log("student");
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify({
            "message": "hiiiii student part"
        }));

        res.end();
    } else {

        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.write("<html><head><title>hii</title></head><body><h1>wrong place </h1></body></html>");

        res.end();

    }

}).listen(5000);

console.log("server is running in port 5000");