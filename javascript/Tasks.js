// Practice diff b/w null and undefined
// Practice Type convertion for all type with example
// Practice  all operators in JS with example


// Opr:

// Arthmetic
// Relational
// Logical
// Ternary
// Bitwise
// increa
// conditionals



// 1. NULL vs UNDEFINED


let a;
console.log("a =", a); // undefined

let b = null;
console.log("b =", b); // null

console.log("typeof a =", typeof a); // undefined
console.log("typeof b =", typeof b); // object

console.log("null == undefined :", null == undefined); // true
console.log("null === undefined :", null === undefined); // false




// 2. TYPE CONVERSION


// String Conversion
let num = 100;
let str = String(num);

console.log("String conversion:", str);
console.log("Type:", typeof str);


// Number Conversion
let strNumber = "25";
let number = Number(strNumber);

console.log("Number conversion:", number);
console.log("Type:", typeof number);


// Number conversion examples
console.log(Number("10"));    
console.log(Number("abc"));   
console.log(Number(true));    
console.log(Number(false));   


// Boolean Conversion
console.log(Boolean(1));        
console.log(Boolean(0));        
console.log(Boolean(""));       
console.log(Boolean("hello"));  
console.log(Boolean(null));     
console.log(Boolean(undefined));




// 3. IMPLICIT TYPE CONVERSION


console.log("5" + 2); // "52"
console.log("5" - 2); // 3




// 4. ARITHMETIC OPERATORS


let x = 10;
let y = 5;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);




// 5. INCREMENT / DECREMENT


let count = 5;

count++;
console.log("Increment:", count);

count--;
console.log("Decrement:", count);




// 6. ASSIGNMENT OPERATORS


let value = 10;

value += 5;
console.log("+= :", value);

value -= 2;
console.log("-= :", value);

value *= 2;
console.log("*= :", value);

value /= 2;
console.log("/= :", value);




// 7. COMPARISON OPERATORS


console.log("5 == '5' :", 5 == "5");
console.log("5 === '5' :", 5 === "5");
console.log("5 != 3 :", 5 != 3);
console.log("5 > 3 :", 5 > 3);
console.log("5 < 3 :", 5 < 3);
console.log("5 >= 5 :", 5 >= 5);




// 8. LOGICAL OPERATORS


let age = 20;

console.log("AND:", age > 18 && age < 30);
console.log("OR:", age > 18 || age < 10);
console.log("NOT:", !(age > 18));



// 9. TERNARY OPERATOR


let personAge = 18;

let result = personAge >= 18 ? "Adult" : "Minor";
console.log("Ternary Result:", result);




// 10. TYPE OPERATOR


let data = 10;
console.log("Type of data:", typeof data);




// 11. STRING OPERATOR


let first = "Hello";
let second = "World";

console.log(first + " " + second);




// 12. PRACTICE QUESTIONS


let p = undefined;
let q = null;

console.log("typeof p =", typeof p);
console.log("typeof q =", typeof q);


// Convert "500" to number and multiply by 2
let numStr = "500";
let converted = Number(numStr);

console.log("500 * 2 =", converted * 2);


// Even or Odd using ternary
let check = 7;

let evenOdd = check % 2 === 0 ? "Even" : "Odd";
console.log("Number is:", evenOdd);


// Output prediction
console.log("10" + 5);
console.log("10" - 5);



