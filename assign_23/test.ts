//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
//  for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// this test will print five condition test that are true:
let userNameArray:string [] = ["Sania", "Hiba", "Laiba", "Neha", "Mirha"]
for ( let i=0; i< userNameArray.length ; i++) {
    console.log(`Is userNameArray == ${userNameArray[i]}? I predict True.`)
    console.log (userNameArray[i]== userNameArray[i])
}

// this test will print five condition test that are false:
let userNameArray1:string [] = ["Sania", "Hiba", "Laiba", "Neha", "Mirha"]
for ( let i=0; i< userNameArray1.length ; i++) {
    console.log(`Is userNameArray1 == ${userNameArray1[i]}? I predict False.`)
    console.log (userNameArray1[i]== 'True')
}