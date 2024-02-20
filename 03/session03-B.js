let fs = require('fs');
let data = process.argv[3];

function appendFilleCall(err) {
    if(err){
        console.log("Error!", err);
    
    }
    else{
        console.log("File Saved!");
    }
}

fs.appendFile(process.argv[2], data, appendFilleCall);