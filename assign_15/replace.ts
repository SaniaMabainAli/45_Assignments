// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who 
// can’t make it.

let guestList:string [] = ['grandpa', 'grandma', 'mom', 'dad', 'brothers', 'sister']
guestList.forEach ( guestList=> { console.log ("Dear", guestList, ", Would you like to join me for dinner today.")})

console.log ('\n', guestList[0], " and " , guestList[1] , " can't join for dinner.")

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newList= guestList.splice (0,2,"relative","fiends")
//console.log ('\n' , newList, "can't join for dinner")
//console.log(guestList)

// • Print a second set of invitation messages, one for each person who is still in your list.
console.log('\n')
guestList.forEach ( guestList=> { console.log ("Dear", guestList, ", Would you like to join me for dinner today.")})

// again some guests can't join for dinner so here is the another method:

let unableToAttend:string= "brothers"
console.log('\n', unableToAttend, "can't join for dinner")
console.log('\n')
let newGuest= "cousins"
guestList[guestList.indexOf(unableToAttend)]= newGuest
guestList.forEach ( guestList=> { console.log ("Dear", guestList, ", Would you like to join me for dinner today.")})