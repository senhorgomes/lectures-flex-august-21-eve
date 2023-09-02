// What are callbacks?
// Functions as parameters. A function that gets passed into another function

//Calculator
////Take in two values and an operation and return the result of the two numbers and the operation
//calculator(2,2,addition) => 2+2=> 4
//calculator(2,2,subtraction) => 2-2=> 0

const randomIDgenerator = () => {
    //code to generate some random 8 string id
}


const addition = (x,y) =>{
    return x + y;
}
const subtraction = (x,y) =>{
    return x - y;
}
const multiplication = (x,y) =>{
    return x * y;
}
const division = (x,y) =>{
    return x / y;
}

const calculator = (number1, number2, callback) => {
    return callback(number1, number2);
    // return addition(2, 2);
    // return 4;

    // return number1 + number2;
    // if(operation === "addition"){
    //     return number1 + number2;
    // }
    // if(operation === "subtraction"){
    //     return number1 - number2;
    // }
    // if(operation === "multiplication"){
    //     return number1 * number2;
    // }
    // if(operation === "division"){
    //     return number1 / number2;
    // }
}

console.log("Result===>",calculator(10,2,multiplication))
// console.log(4)
// console.log(calculator(2,2,addition(2,2)))
// console.log(calculator(2,2,"division"))

//Nested function

const decryptionSoftware = require('');

const loginFunction = (email, password) => {
    for(const user in users){
        // check for email
        if(user.email === email){
            //check for the password
            if(decryptionSoftware(user.password, password)){
                //Then log them in
            }
        }
    }
}