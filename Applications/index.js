var fs =  require('fs');

fs.readFile('./input.txt','utf-8',function(err,data){
    console.log(data);
})
