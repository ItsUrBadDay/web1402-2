// let fs = require('fs');
// let data = process.argv[3];

// function writeFilleCall(err) {
//     if(err){
//         console.log("Error!", err);
    
//     }
//     else{
//         console.log("File Saved!");
//     }
// }

// fs.writeFile(process.argv[2], data, writeFilleCall);

let fs = require('fs');
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('file name: ', (fileName) => {
    rl.question('data inside: ', (fileData) => {
        fs.writeFile(fileName, fileData, (err) => {
            if (err) {
                console.log("Error!", err);
            } else {
                console.log("File Saved!");
            }
            rl.close();
        });
    });
});
