// Magicians: Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name 
// of each magician in the array.
var magician_names = ["Dynamo", "Apollo", "Harry"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magician_names);
