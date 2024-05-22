// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let arr:(string) [] = ["Sania", "laiba", "Neha", "Mirha", "Hiba"];
for (let i:number=0; i<arr.length; i++){
    console.log ("hi! ",arr[i], " how are you?")
}
// trying the callback function:
//arr.forEach(arr=> console.log('hi how are you? ' + arr))
