"use strict";
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
let animals = ["Zebra", "Giraffe", "Deer"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    if (animal == "Zebra")
        console.log("Zebra has black and white.");
    else if (animal == "Giraffe")
        console.log("Giraffe has longest tongue among mammals. ");
    else if (animal == "Deer")
        console.log("Deer is one of fastest runner.");
}
console.log("These animals are herbivours and these animals like to eat palm trees.");
