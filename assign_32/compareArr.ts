//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person
//  will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let currentUsers : string[] = ["Sania", "Neha", "Sara", "Sana", "ZaRa"]
let newUsers: string[] = ["Saima", "SANA", "Atia", "SANIA", "zoha"]
//  for(let newUser of newUsers){
//     let isAvailable: boolean = true
//     for(let currentUser of currentUsers){
//         if(newUser.toLowerCase() == currentUser.toLowerCase()){
//         console.log(`UserName ${newUser} is already taken. please enter new Username!`)
//         isAvailable = false
//         break
//     }
// }
// if(isAvailable){
// console.log(`Username ${newUser} is available`)
//  }
// }

newUsers.forEach(newUser => {
    if(currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())){
        console.log(`UserName ${newUser} is already taken. please enter new Username!`) 
    }else{
        console.log(`Username ${newUser} is available`)  
    }
})