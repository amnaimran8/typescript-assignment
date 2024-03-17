"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been change*/
let travel = ["Pakistan", "Indonesia", "US", "Korea", "England"];
console.log(travel);
console.log(travel.slice().sort());
console.log(travel);
console.log(travel.slice().sort().reverse());
console.log(travel);
console.log(travel.slice().reverse());
console.log(travel);
console.log(travel.sort());
