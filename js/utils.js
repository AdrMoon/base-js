// const x=2;
// const y=4;

// const calcSum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(calcSum(x, y));
// console.log(calcSum(3, 4));



// Addition
const calcSum = (num1, num2) => {
  if ((num1 == null) || (num2 == null)) {
    console.log('Error: One or both of the arguments are null or undefined.');
  } else {
    return num1 + num2;
  }
};
// console.log(calcSum(15, 5));
// console.log(calcSum(15));


// Subtraction
const calcDif = (num1, num2) => {
  if ((num1 == null) || (num2 == null)) {
    console.log('Error: One or both of the arguments are null or undefined.');
  } else {
    return num1 - num2;
  }
};
// console.log(calcDif(15, 5));
// console.log(calcSum(15));


// Multiplication
const calcProduct = (num1, num2) => {
  if ((num1 == null) || (num2 == null)) {
    console.log('Error: One or both of the arguments are null or undefined.');
  } else {
    return num1 * num2;
  }
};
// console.log(calcProduct(15, 5));
// console.log(calcSum(15));


// Division
const calcQuotient = (num1, num2) => {
  if ((num1 == null) || (num2 == null)) {
    console.log('Error: One or both of the arguments are null or undefined.');
  } else {
    return num1 / num2;
  }
};
// console.log(calcQuotient(15, 5));
// console.log(calcSum(15));
