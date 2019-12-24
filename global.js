

//procees value

console.log(__dirname +"hiiiiiii its your filename"+ __filename);

console.log("procees"+ process.pid);
console.log("procees"+ process.arch);
console.log("procees"+ process.version);
console.log("procees"+ process.versions);
console.log("procees"+ process.platform);
console.log("procees"+ process.release);

process.argv.forEach((value, index, array) => {  
    console.log(`${index}: ${value}`);  
  });
  
  //function of process


  console.log(process.cwd());
  console.log(process.hrtime());
  console.log(process.memoryUsage());
  console.log(process.uptime());


  //buffers

  var buf1 = new Buffer(20);

  var buf2 = new Buffer([10,20,30]);

  var buf3= new Buffer('hello i am here','utf8');


  console.log(buf1, buf2, buf3);


  //how to  write buffer

//   buf.write(string[, offset][, length][, encoding])  
  buf = new Buffer(256);  
  len = buf.write("Simply Easy Learning",'utf8');
  console.log( buf.toString('utf8',0,5));   
  console.log("Octets written : "+  len);  

  //Reading from buffers
  buf = new Buffer(26);  
  for (var i = 0 ; i < 26 ; i++) {  
    buf[i] = i + 97;  
  }  
  console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz  
  console.log( buf.toString('ascii',0,5));   // outputs: abcde  
  console.log( buf.toString('utf8',0,5));    // outputs: abcde  
  console.log( buf.toString(undefined,0,5));

const StringDecoder = require('string_decoder').StringDecoder;  
const decoder = new StringDecoder('utf8');  
  
const buf1 = new Buffer('this is a test');  
console.log(decoder.write(buf1));//prints: this is a test  
  
const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');  
console.log(decoder.write(buf2));//prints: this is a test  
  
const buf3 = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);  
console.log(decoder.write(buf3));//prints: buffer  



