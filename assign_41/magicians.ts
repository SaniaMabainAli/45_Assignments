// Magicians: Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name 
// of each magician in the array.

let magician_names: string [] = ["Dynamo", "Apollo", "Harry"]

function show_magicians (magician_names: string[]){
magician_names.forEach(magician => {
    console.log(magician)
})
}

show_magicians(magician_names)
