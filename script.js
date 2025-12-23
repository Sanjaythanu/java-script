// Variables
var a = 100;
let b = 200;
const c = 300;

{
    var a = 100;
    let b = 200;
    const c = 300;
}

var a = 200;
b = 300;
console.log(a);
console.log(b);
console.log(c);

// Data types
let x = 10;
let y = 20;
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);

// String
let cname = "BIT";
let grade = 'A';
console.log(cname);
console.log(typeof cname);
console.log(typeof grade);

// Boolean
let pass = true;
console.log(pass);
console.log(typeof pass);

// Null
let data = null;
console.log(typeof data);

// Undefined
let val;
console.log(typeof val);

// Number
let phoneno = 223456789;
console.log(typeof phoneno);

let age = 25;
console.log("My name is", cname, "My age is", age);

// Operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(2 ** 3);

// Assignment operator
console.log(x += y);
console.log(x);

// Comparison operators
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x === y);

// Logical operator
console.log(x > y && x == y);

// Type coercion
console.log('10' * 10);

// Conditional statement
let marks = Number(prompt("Enter your mark"));
if (marks >= 90 && marks <= 100) {
    console.log("A grade");
} else if (marks >= 60 && marks <= 89) {
    console.log("B grade");
} else {
    console.log("Fail");
}

// Recursion
function fact(n) {
    if (n <= 1)
        return 1;
    return n * fact(n - 1);
}
console.log(fact(5));

// Arrow function
const add = (a, b) => {
    return a * b;
}
console.log(add(10, 20));

// Callback functions
function greet(name, callback) {
    console.log("Hello", name);
    callback("sri");
    typo("vijay");
}

function hai(name1) {
    console.log("Batman", name1);
}

function typo(name2) {
    console.log("tvk", name2);
}

greet("Sanjay", hai);

// setTimeout
setTimeout(() => {
    console.log("Vizhi veekura");
}, 10000);

// setInterval
let count = 1;
let timer = setInterval(() => {
    console.log("Welcome to BIT");
    count++;
    if (count == 11) {
        clearInterval(timer);
    }
}, 2000);

// Arrays
let array = [1, 2, 3, "BIT", true, 'a', 'b', 'c'];
console.log(array[3]);
array[3] = "sanjay loves sri";
console.log(array);
console.log(array[array.length - 1]);

array.push('d');
console.log(array.pop());
array.shift();
console.log(array);
array.unshift("hello");
console.log(array);

// Array methods
let arr1 = [5, 3, 2, 1];
console.log(arr1.sort());
console.log(arr1.reverse());
console.log(arr1.includes(5));
console.log(arr1.indexOf(2));

console.log(arr1);
console.log(arr1.slice(0, 3));

let arr2 = [10, 20, 30];
console.log(arr2);

let arr3 = arr1.concat(arr2);
console.log(arr3);

// Spread operator
let newarray = [...arr1];
let arr4 = [...arr2];
console.log(newarray);
console.log(arr4);

// Higher-order functions
let arr = [1, 2, 3, 4, 5];

let nummul = arr.map(val => val * 2);
console.log(nummul);

let oddsum = arr.filter(val => val % 2 != 0);
console.log(oddsum);

let numbers = arr.reduce((acc, val) => acc * val, 1);
console.log(numbers);
