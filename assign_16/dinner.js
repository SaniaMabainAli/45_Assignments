// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found
//  a bigger dinner table.
var guestList = ['grandpa', 'grandma', 'mom', 'dad', 'brothers', 'sister'];
guestList.forEach(function (guestList) { console.log("Dear", guestList, ", Would you like to join me for dinner today."); });
console.log("\n I have found a bigger dinner table \n");
// • Add one new guest to the beginning of your array.
guestList.unshift("Aunty");
// • Add one new guest to the middle of your array. 
guestList.splice(guestList.length / 2, 0, "uncle");
// • Use append() to add one new guest to the end of your list.
guestList.push("cousins");
// • Print a new set of invitation messages, one for each person in your list.
guestList.forEach(function (guestList) { console.log("Dear", guestList, ", Would you like to join me for dinner today."); });
