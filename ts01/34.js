"use strict";
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza*/
let pizza = ["Ittalian", "Mexican", "Pepperoni"];
for (let piizas of pizza) {
    console.log(piizas);
}
for (let piizas of pizza) {
    if (piizas == "Ittalian")
        console.log("They sell best Ittalian.");
    else if (piizas == "Pepperoni")
        console.log("I love pepperoni.");
    else if (piizas == "Mexican")
        console.log("Mexicians pizzas are very spicy.");
}
console.log("I really love pizza specially Mexican pizzas they are one of the best pizzas out their.Pizza Hut and Pizza Max sells best pizzas. Pizzas taste the best when their is extra cheese on them.\n I really love pizzas ");
