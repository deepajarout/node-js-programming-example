
var fs = require('fs');

var data='';


//createReadStream example 

var readStream = fs.createReadStream('test.txt');

readStream.setEncoding('utf8');

readStream.on('data',function(chunk){
    console.log(chunk);
    data+=chunk;


});

readStream.on('end',function(){  
    console.log(data);  
 });  

 readStream.on('error', function(err){  
    console.log(err.stack);  
 });  


 console.log("Program Ended");  

 //createWriteStream example

var datal="welcome ,here example related to createwritestream";

var writeStream = fs.createWriteStream('output.txt');


writeStream.write(datal,'utf8');

writeStream.on('data',function(err){
 if(err){
     console.log(err)
 }

});

writeStream.on('finish',function(){  
    console.log("task is completed");  
 });  

 writeStream.on('error', function(err){  
    console.log(err.stack);  
 });  


 console.log("Program Ended");





