const randomArrayofNumbers = [1,2,3,4,5];

const mapMethodCopy = (passedInArray, callback) => {
    //We need to make sure that our function modifies the elements in the array
    const newArray = [];
    // const newArray = [1,3,5];
    // Is there a loop that allows us to execute a function for each element, index, or array
    // It does NOT return anything

    passedInArray.forEach((element, index, array)=> {
        const modifiedElement = callback(element, index, array);
        // const modifiedElement = (element,index,array)=>element + index;
        // const modifiedElement = (3,2,[1,2,3,4,5])=>3 + 2;
        // const modifiedElement = 5;
        newArray.push(modifiedElement);
        // newArray.push(5);
    })
    // for(let i = 0; i < passedInArray.length; i++){
    //     if(element){
    //         newArray.push(callback(passedInArray[i])) //=> elements
    //     }
    //     //Indexes
    //     if(index){
    //         newArray.push(callback(i)) //=> indexes
    //     }
    //     //Arrays
    //     if(array){
    //         newArray.push(callback(passedInArray)) //=> arrays
    //     }
    // }
    return newArray;
}
console.log(mapMethodCopy(randomArrayofNumbers, (e,i,a)=>e + i))
// console.log(randomArrayofNumbers.forEach((element)=>element * 2))