// let obj = {

// }

// let inputs = [

// ]

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let names = [];
let ages = [];

rl.question('Enter the first name: ', (name1) => {
    names.push(name1);
    rl.question('Enter the age of ' + name1 + ': ', (age1) => {
        ages.push(age1);
        rl.question('Enter the second name: ', (name2) => {
            names.push(name2);
            rl.question('Enter the age of ' + name2 + ': ', (age2) => {
                ages.push(age2);
                rl.question('Enter the third name: ', (name3) => {
                    names.push(name3);
                    rl.question('Enter the age of ' + name3 + ': ', (age3) => {
                        ages.push(age3);
                        console.log("Names:", names);
                        console.log("Ages:", ages);
                        rl.close();
                    });
                });
            });
        });
    });
});
