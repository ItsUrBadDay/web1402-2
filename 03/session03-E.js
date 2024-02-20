let fs = require('fs');
let data = process.argv[3];

function copyFilleCall(err) {

    if(err){
        console.log("File wasn't copied!", err)
    }
    else{
        console.log("File was copied!")

    }
}

fs.copyFile(process.argv[2], process.argv[3], copyFilleCall);