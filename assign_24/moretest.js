//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var car1 = "Subaru";
var car2 = "subaru";
console.log("Testing equality with strings:");
console.log(car1 == car1); // True
console.log(car1 == car2); // False
// • Tests using the lower case function
console.log("Testing lower case Funstion:");
console.log("TOYOTA".toLowerCase() == "toyota"); // True
console.log("TOYOTA".toLowerCase() == "TOYOTA"); // False
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Test:");
var num1 = 2;
console.log(num1 == 2); //true
console.log(num1 == 3); // false
console.log(8 < 9); // true
console.log(9 > 10); // False
console.log(4 >= 4); // true
console.log(6 <= 5); // false
// • Tests using "and" and "or" operators
console.log("Test Using 'and' and 'or' operator:");
var userName = "Sania";
var pwd = "1234";
console.log(pwd == "123" || userName == "Sania"); // true
console.log(pwd == "123" && userName == "Sania"); // false
// • Test whether an item is in a array
console.log("Test an item is in Array:");
var arr = ['mango', 'apple', 'orange'];
console.log("Is 'apple' in fruits?");
console.log(arr.indexOf('apple', 0)); //true or index of apple
console.log("Is 'strawberry' in fruits?");
console.log(arr.indexOf('strawberry', 0)); // false or -1
// • Test whether an item is not in a array
console.log("Test an item is not in Array:");
if (arr.indexOf('strawberry') == -1) {
    console.log("strawberry is not included in array");
}
else {
    console.log("strawberry is in array");
}
