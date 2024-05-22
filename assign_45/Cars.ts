// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function car_info(manufacturer : string, modelName : string, ...moreInfo : [string , any] []) {
    let car_obj = {
        manufacturer ,
        modelName
    }
    moreInfo.forEach(([key, value]) => car_obj[key] = value)
    return car_obj
}

console.log (car_info("Honda", "Civic",["color", "silver"], ["year", 2020]))
console.log (car_info("Ferrari", "Roma",["color", "red"], ["year", 2021], ["scissors_door", true]))


