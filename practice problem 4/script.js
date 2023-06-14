/*
! Write an arrow function where it will do the following:
* a) It will take tro array inputs
* b) Combile the two arrays and assign them in a new array
* c) Find the maximum number from the new array and the return the result
TODO: Print the result
*/


const firstArray = [11, 22, 33, 44, 55];
const secondArray = [66, 77, 88, 99];

const maximum = (firstArray, secondArray) =>{
    const newArray = [...firstArray,...secondArray];
    const maximumNumber = Math.max(...newArray);
    return maximumNumber;
}

const returnValue = maximum(firstArray, secondArray);
console.log(returnValue);
