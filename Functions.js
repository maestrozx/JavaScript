/*Write a function called add7 that takes one number and 
returns that number + 7.*/
function add7(num) {
    return num + 7;    
}
const result = add7(6);
console.log(result);

/*Write a function called multiply that takes 2 numbers and 
returns their product.8*/
function multiply(numOne, numTwo) {
    return numOne * numTwo;    
}
const multiplication = multiply(5, 8);
console.log(multiplication); 

/*Write a function called capitalize that takes a string and 
returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE
or BoTh.*/
function capitalize(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    if (str.length === 0) {
      return str;
    }
  
    const firstLetter = str[0].toUpperCase();
    const restOfString = str.slice(1).toLowerCase();
  
    return firstLetter + restOfString;
  }
/*Write a function called lastLetter that takes a string and 
returns the very last letter of that string:8*/
function lastLetter(str) {
    return str.charAt(str.length - 1);    
}
const last = lastLetter("LIBERIUS");
console.log(last);
