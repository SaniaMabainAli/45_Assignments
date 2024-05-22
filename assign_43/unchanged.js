/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original names and one array with
  the Great added to each magician’s name.*/
var magician_names = ["Dynamo", "Apollo", "Harry"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magician_names) {
    var greatMagicians = [];
    magician_names.forEach(function (magician) {
        greatMagicians.push("The Great ".concat(magician));
    });
    return greatMagicians;
}
console.log("Original Magicians: ");
show_magicians(magician_names);
var greatMagicians = make_great(magician_names.slice());
console.log("Great Magicians: ");
show_magicians(greatMagicians);
