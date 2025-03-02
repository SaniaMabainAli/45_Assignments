// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//  using a different number of arguments each time.


// let sandwich : string [] = []
function Sandwich(...sandwich : string[]) {       // ... used to represent rest parameter. It is called spread operator.
    console.log (`Make a sandwich with: ${sandwich.join(' - ')}.`)
}

Sandwich("ketchup", "patty")
Sandwich("chicken", "cheese", "white sauce")
Sandwich("lettuce", "mayo dip", "nuggets", "cheese")