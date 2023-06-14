/*
! Write an arrow funtion where it will do the following:
* a) Square each array element
* b) Calculate the sum of the squared elements
* c) Return the average of the sum of the squared elements
Todo: Print the result
*/

const averageOfSum = myArray =>{
    let sum = 0;
    for(const array of myArray){
        const muliply =  array * array;
        sum = sum + muliply;
    }
    const arrayLength = myArray.length;
    const average = sum / arrayLength;
    return average;
}

const myArray = [11, 12, 13, 14, 15]

const functionCall = averageOfSum(myArray);
console.log(functionCall);
