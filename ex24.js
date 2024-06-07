"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
let apple = "apple";
let uppercaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange", "kiwi", "avacado"];
//test for equalilty or not equalilty
console.log("apple is equal to equal");
console.log(apple == apple);
//test for not equality
console.log("/n apple is not equal apple");
console.log(apple != "apple");
console.log("is Apple is equal to apple after covertering to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("is Apple is not equal to apple after covertering to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical test
console.log("is ten equal to twenty?");
console.log(ten == twenty);
console.log("is ten smaller to twenty?");
console.log(ten < twenty);
console.log("is ten greater then twenty?");
console.log(ten > twenty);
console.log(" ten is not equal to twenty?");
console.log(ten != twenty);
// test for using and & or
console.log("twenty is not  equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 10);
//using or
console.log("20 is greater than 50 or 20 is equal 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 or 20 is not equal 20");
console.log(20 > 50 || 20 != 20);
//• Test whether an item is include in a array
console.log("is orange is include in my fruits array");
console.log(fruits.includes("orange"));
console.log("is orange is not include in my fruits array");
console.log(!fruits.includes("orange"));
