const fs = require('fs');

function appendFile(data) {
    fs.appendFile(process.argv[3], data, (err) => {
        if (err) {
            console.log("Error!", err);
        } else {
            console.log("File Saved!");
        }
    });
}


function deleteFile(err) {
    fs.unlink(process.argv[3], (err) => {
        if (err) {
            console.log("Error!", err);
        } else {
            console.log("File deleted!");
        }
    });
}

function deleteDirectory(err) {
    fs.rmdir(process.argv[3], (err) => {
        if (err) {
            console.log("Error!", err);
        } else {
            console.log("Directory deleted!");
        }
    });
}

function copyFile(err) {
    fs.copyFile(process.argv[3], process.argv[4], (err) => {
        if (err) {
            console.log("Error!", err);
        } else {
            console.log("File copied!");
        }
    });
}


const action = process.argv[2];
switch (action) {
    case 'append':
        appendFile(process.argv[4]);
        break;
    case 'delete':
        deleteFile();
        break;
    case 'deleteDir':
        deleteDirectory();
        break;
    case 'copy':
        copyFile();
        break;
    default:
        console.log("Invalid action!");
        break;
}
