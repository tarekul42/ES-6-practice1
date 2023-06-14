//! write an arrow function that will take 3 parameters, will multuply the parameters and will return the result

const muliply = (x, y, z) => x * y * z;

// console.log(muliply(2, 3, 4));

//! write the following sentece in three lines and print the result: I am a web developer. I love to code. I love to eat biryani

const useCaret = `
    I am a web developer.
    I love to code.
    I love to eat biryani
`;
// console.log(useCaret);

// ! write an arrow function that will take 2 parameters: one parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const arrowCheck = (firstNumber, secondNumber = 0) => firstNumber + secondNumber;

console.log(arrowCheck(90));