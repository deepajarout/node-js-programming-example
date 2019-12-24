var events = require('events').EventEmitter;

var util = require('util');

function printNumber(num){

    var et = this;

setTimeout(function(){

    for(var i = 0;i<num; i++){

        et.emit('beforeprocess', i);

        console.log('proccesing this number',  i);

        et.emit('afterprocess', i);
    }

}, 3000);

return this;

}

util.inherits(printNumber,events);

var a = new printNumber(5);

a.on('beforeprocess',function(data){
    console.log('beforeprocess', data);
});

a.on('afterprocess',function(data){
    console.log('afterprocess', data);
})






