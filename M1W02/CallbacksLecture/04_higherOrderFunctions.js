// What are callbacks?
// Functions as parameters. A function that gets passed into another function

//What is a HigherOrder function?
// A function that takes a function as a parameter
// .map()

const randomArrayofNumbers = [1,2,3,4,5];

const mappedArray = randomArrayofNumbers.map((e,i,a)=> a)
// const mappedArray = randomArrayofNumbers.map((element,index,array)=> array)
// const mappedArray = randomArrayofNumbers.map((element)=>{
//     return element * 2;
// })
const multiplyByTwo = (item) => {
    return item * 2;
}

const mapMethodCopy = (passedInArray, callback, element, index, array) => {
    console.log("index", index)
    console.log("array", array)
    //Undefined is a falsy
    //We need to make sure that our function modifies the elements in the array
    const newArray = [];
    // const newArray = [2,4,6,8,10];
    for(let i = 0; i < passedInArray.length; i++){
        if(element){
            newArray.push(callback(passedInArray[i])) //=> elements
        }
        //Indexes
        if(index){
            newArray.push(callback(i)) //=> indexes
        }
        //Arrays
        if(array){
            newArray.push(callback(passedInArray)) //=> arrays
        }
    }
    // for(const element of passedInArray){
    //     //Execute the callback for each element in the array
    //     const modifiedElement = callback(element);
    //     // const modifiedElement = (element)=>element * 2;
    //     // const modifiedElement = multiplyByTwo(2);
    //     // const modifiedElement = 4;
    //     // and then it pushes the modified element into a new array
    //     // newArray.push(callback(element))
    //     // newArray.push(modifiedElement) => 4
    //     newArray.push(modifiedElement)
    // }
    // and returns a brand new array
    return newArray;
}

// console.log(mapMethodCopy(randomArrayofNumbers, multiplyByTwo))
console.log(mapMethodCopy(randomArrayofNumbers, (item)=>item,true))
// console.log([2,4,6,8,10])
// .filter((element,index,array)=> )
// .forEach((element,index,array)=> )
