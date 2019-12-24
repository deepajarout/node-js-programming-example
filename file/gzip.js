var fs = require('fs');
var zlib = require('zlib');

// gip of existing file
var gzip = new zlib.createGzip();

var input = fs.createReadStream('input.txt');

var output = fs.createWriteStream('input.txt.gz');

input.pipe(gzip).pipe(output);


//unzip file

var unzip = new zlib.createUnzip();

var inp = fs.createReadStream('test.txt.gz');

var out = fs.createWriteStream('test.txt');

inp.pipe(gzip).pipe(out);

