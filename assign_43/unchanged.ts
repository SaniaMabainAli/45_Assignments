/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original names and one array with
  the Great added to each magician’s name.*/

  let magician_names: string [] = ["Dynamo", "Apollo", "Harry"]

  function show_magicians (magician_names: string[]){
    magician_names.forEach(magician => {
        console.log(magician)
    })
    }    

  function make_great(magician_names: string []) : string[]{
    let greatMagicians : string [] = []
    magician_names.forEach(magician => {
        greatMagicians.push(`The Great ${magician}`)
    })
    return greatMagicians
}

console.log("Original Magicians: ")
show_magicians(magician_names)
let greatMagicians = make_great(magician_names.slice())
console.log("Great Magicians: ")
show_magicians(greatMagicians)
