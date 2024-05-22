// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.

let guestList:string [] = ['grandpa', 'grandma', 'mom', 'dad', 'brothers', 'sister']
guestList.forEach ( guestList=> { console.log ("Dear", guestList, ", Would you like to join me for dinner today.")})

//•Start with your program from Exercise 16.Add a new line that prints a message saying that you can invite only two people for dinner
console.log("\n Sad news that I can only invite two people for dinner. \n")

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// for(let i:number = 0; i<4; i++){
// console.log(guestList.pop(), "I am sorry I can't invite you to dinner.")
// }
// console.log(guestList)

for(let i:number =0 ; i<=guestList.length; i++){
    console.log(guestList.pop(), "I am sorry I can't invite you to dinner.")
    }
console.log(guestList)

// while(guestList.length > 2){
//     let removedGuest= guestList.pop()
//     console.log( `Sorry ${removedGuest} I can't invite you for dinner.`)
// }

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log('\n')
guestList.forEach ( guestList=> { console.log ("Dear", guestList, ", You are still invited for dinner.")})

// • Remove the last two names from your list, so you have an empty list. 
let lastElements= guestList.splice(0,guestList.length)
console.log(lastElements)

// Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestList)

