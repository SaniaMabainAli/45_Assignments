// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
// that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
// the if block should print a statement, such as You really like bananas!
var fav_fruits = ["Apples", "Mango", "Grapes"];
if (fav_fruits.indexOf('Apples') != -1) {
    console.log("You really like Apples");
}
else {
    console.log("You don't like this fruit!");
}
if (fav_fruits.indexOf('peach') != -1) {
    console.log("You really like Peach");
}
else {
    console.log("You don't like this fruit!");
}
if (fav_fruits.indexOf('Mango') != -1) {
    console.log("You really like Mango");
}
else {
    console.log("You don't like this fruit!");
}
if (fav_fruits.indexOf('Grapes') != -1) {
    console.log("You really like Grapes");
}
else {
    console.log("You don't like this fruit!");
}
