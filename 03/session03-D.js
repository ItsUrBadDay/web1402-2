let fs = require('fs');
let data = process.argv[3];

function unlFilleCall(err) {
    if(err){
    fs.rmdir(process.argv[2], data, rmdirFilleCall);
    }
    else{
        console.log("File not deleted!", err);
    }

    if(!err){
        console.log("File deleted!")
    }
}

function rmdirFilleCall(err){
    if(err){
        console.log("ERR", err)
    }
    else{
        console.log("rmdir success")
    }
}
fs.unlink(process.argv[2], data, unlFilleCall);