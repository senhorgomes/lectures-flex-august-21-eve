//What types of functions exist?
// Function declartion -> Anonymous Functions
function someRandomFunctionDeclartion(){
    return "I am a random function!"
}
//Hoisted

// console.log(someRandomFunctionDeclartion)
// Function expression

// const someRandomFunctionExpression = function(){
//     console.log("I am also a random function!")
// }
// const someRandomFunctionExpression = () => console.log("I am also a random function!")

/////Implecit return -> only works to return one specific value, or run one line of code
// const someRandomFunctionExpression = () => "I am also a random function!"
const someRandomFunctionExpression = () => {
    return "I am also a random function!"
}

// Invoking
someRandomFunctionExpression()

//Referencing
someRandomFunctionExpression


// console.log(someRandomFunctionExpression())
//Arrow functions doesn't know what "THIS" is

const someRandomObject = {
    name:"Bryan",
    whatIsMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}
someRandomObject.whatIsMyName()


//Best practices
// Arrow functions for declared functions (const)
// Methods best to use function expressions - function()