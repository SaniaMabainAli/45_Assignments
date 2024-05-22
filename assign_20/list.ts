// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
//  languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains:string[] = ["Mount Everest", "K-2", "Nanga Parbat", "Salt Range", "Hindukush", "Korakaram"]
let rivers:string[] = ["Indus", "Jhelum", "Ravi", "Chenab", "Sutlej"]
console.log ("List of Mountains:")
for (let i=0 ; i<mountains.length ; i++){
        console.log(mountains[i])
    }

console.log ("List of Rivers:")
for (let i=0 ; i<rivers.length ; i++){
        console.log(rivers[i])
    }