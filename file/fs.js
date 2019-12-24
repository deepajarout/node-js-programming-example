var fs = require('fs');

var data = 'congratualation you are completed your task'


//read existing file
fs.readFile('input.txt','utf8',function(err,data){
    if(err){
        console.log(err);
    }

    console.log(data);
})

//write new file
fs.writeFile('text.txt',data ,function(err){
if(err){
    console.log(err)
}
})


//add data in existing file
fs.appendFile('text.txt',data ,function(err){
    if(err){
        console.log(err)
    }
    })


 //delet the file
 fs.unlink('text.txt',function(err){
        if(err){
            console.log(err);
        }
        console.log('deleted');
    })

console.log(fs);




