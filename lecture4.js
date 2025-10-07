const prompt = require('prompt-sync')();


// Map Example:

    // let fruits = new Map();
    // console.log(fruits);


    // fruits.set("Apple", 400);
    // fruits.set("Apple", 600);
    // fruits.set("Mango", 500);
    // fruits.set("Kiwi", 200);
    // console.log(fruits);
    // console.log(fruits.get("Apple"));
    // console.log(fruits.has("Apple"));
    // console.log(fruits.size);
    // console.log(fruits.delete("Apple"));
    // console.log(fruits);
    // fruits.clear();
    // console.log(fruits);

// #1

// function removeEven(arr){
//     return arr.filter(num => num % 2 !== 0);
// }

// const input = prompt("Enter numbers seperated by commas: ");
// const numbers = input.split(',').map(Number);

// console.log(removeEven(numbers));

// #2

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(arr);
const uniqueArray = [...uniqueSet];
console.log(uniqueArray);

// #3



// #4


