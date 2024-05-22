// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
var magician_names = ["Dynamo", "Apollo", "Harry"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great() {
    magician_names.forEach(function (magician) {
        console.log("The Great", magician);
    });
}
// function make_great(magician_names: string []){
//    for(let i = 0; i < magician_names.length; i++){
//     magician_names[i] ="The Great "  +magician_names[i]   // another method to write above function
//    }
//    console.log(magician_names)
// }
show_magicians(magician_names);
make_great();
