/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the
 information was stored
correctly*/
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    return { manufacturer: manufacturer, model: model, extras: extras };
}
var car1 = car_info("Toyota", "Suzuki", ["color", "red"], ["year", "2022"]);
console.log(car1);
