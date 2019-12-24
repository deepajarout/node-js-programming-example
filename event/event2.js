var events = require('events').EventEmitter;

// var event = new events.EventEmitter();

function printNumber(num){

    var et = new events();

setTimeout(function(){

    for(var i = 1;i<num; i++){

        et.emit('beforeprocess', i);

        console.log('proccesing this number',  i);

        et.emit('afterprocess', i);
    }

}, 1000);

return et;

}


var a = printNumber(5);

a.on('beforeprocess',function(data){
    console.log("beforeprocess", data);
});

a.on('afterprocess',function(data){
    console.log("afterprocess", data);
})






