//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let arr: string[] = ["Sania", "laiba", "Neha", "Mirha", "Hiba"]

// the code with error. Arrays index starts with 0 because of the last for loop iteration it will print undefined for index 5.
for (let i: number=0 ; i<= arr.length ; i++){
    console.log (arr[i])
}

//the code without error
for (let i: number=0 ; i< arr.length ; i++){
    console.log (arr[i])
}