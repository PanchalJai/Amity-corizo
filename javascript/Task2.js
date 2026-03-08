// Task 2

// Practice if else ladder and nested if else in JS
// Practice for and do - while loop
// Practice built-in functions of array in js


// 1. IF – ELSE LADDER PRACTICE


let marks = 78;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}



// 2. NESTED IF – ELSE PRACTICE


let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("You can enter.");
    } else {
        console.log("ID required.");
    }
} else {
    console.log("You are under 18.");
}



// 3. FOR LOOP PRACTICE


console.log("For Loop Example:");

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}



// 4. DO – WHILE LOOP PRACTICE


console.log("Do While Loop Example:");

let num = 1;

do {
    console.log("Value:", num);
    num++;
} while (num <= 5);



// 5. ARRAY BUILT-IN FUNCTIONS


let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// push()
numbers.push(60);
console.log("After push:", numbers);

// pop()
numbers.pop();
console.log("After pop:", numbers);

// shift()
numbers.shift();
console.log("After shift:", numbers);

// unshift()
numbers.unshift(5);
console.log("After unshift:", numbers);

// slice()
let sliced = numbers.slice(1, 3);
console.log("Slice:", sliced);

// splice()
numbers.splice(2, 1, 99);
console.log("After splice:", numbers);

// map()
let doubled = numbers.map(n => n * 2);
console.log("Map (doubled):", doubled);

// filter()
let filtered = numbers.filter(n => n > 20);
console.log("Filter (>20):", filtered);

// reduce()
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (sum):", sum);

// find()
let found = numbers.find(n => n > 25);
console.log("Find (>25):", found);

// includes()
console.log("Includes 30:", numbers.includes(30));

// indexOf()
console.log("Index of 40:", numbers.indexOf(40));