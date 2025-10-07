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

function removeEven(arr){
    return arr.filter(num => num % 2 !== 0);
}
console.log("Exercise 1: ");
console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));

console.log("\n")

// #2

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(arr);
const uniqueArray = [...uniqueSet];
console.log("Exercise 2: ")
console.log(uniqueArray);

console.log("\n")

// #3

function check(arr, num){
    return arr.includes(num);
}
console.log("Exercise 3: ")
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))

console.log("\n")

// #4

function numObj(arr){
    return arr.map(num =>{
        return {[num]: String.fromCharCode(num)};
    });
}

console.log("Exercise 4: ");
console.log(numObj([118, 117, 120]));
console.log(numObj([101, 121, 110, 113, 103]));