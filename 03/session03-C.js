let fs = require('fs');
let data = process.argv[3];

function unlFilleCall(err) {
    if(err){
        console.log("Error!", err);
    
    }
    else{
        console.log("File deleted!");
    }
}

fs.unlink(process.argv[2], data, unlFilleCall);