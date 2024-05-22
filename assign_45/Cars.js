// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
function car_info(manufacturer, modelName) {
    var moreInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreInfo[_i - 2] = arguments[_i];
    }
    var car_obj = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    moreInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car_obj[key] = value;
    });
    return car_obj;
}
console.log(car_info("Honda", "Civic", ["color", "silver"], ["year", 2020]));
console.log(car_info("Ferrari", "Roma", ["color", "red"], ["year", 2021], ["scissors_door", true]));
