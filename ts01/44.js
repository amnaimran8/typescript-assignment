/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that
collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the
function three times, using a different number of arguments each time.*/
function sandwich() {
    var things = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        things[_i] = arguments[_i];
    }
    console.log("New ingredients");
    for (var _a = 0, things_1 = things; _a < things_1.length; _a++) {
        var s = things_1[_a];
        console.log(s);
    }
}
sandwich("Chicken", "Ham\n");
sandwich("Ham\n");
sandwich("Beef", "Parsley", "Lettuce\n");
