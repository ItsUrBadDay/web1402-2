// console.log("Hello world!");
// x = "Danoosh";
// y = "Tabatabaei";
// console.log("My name is ", x, "and my last name is ", y);
// let age = 21;
// let height = 190;
// console.log("I'm ", age, "years old!")
// console.log("I'm ", height, "cm tall!")

// console.log("Type of Age is ", typeof age, "and value of age is", age)
// console.log("Value of x is ", typeof x, "and value of x is", x)
// z = [1, 2, "three", "Four"];



function sum(a, b) {
    let result = a + b;
    let count = 0;
    for (let i = 1; result < 15; i++) {
        result += 1;
        count++;
    }
    return { sum: result, count: count };
}

const result = sum(4, 5);
console.log("Sum:", result.sum);
console.log("Numbers added:", result.count);

