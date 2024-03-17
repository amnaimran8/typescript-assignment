/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let invitenames3 = ["Ali", "Amna", "Hassan", "Imran", "Sobia"]
console.log("Hello " + invitenames3[0] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[1] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[2] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[3] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("\n\nSorry guys Imran ain't available so he won't be able to join the party we are are inviting a new hounorable guest")
console.log("\n\nHello " + invitenames3[0] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[1] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[2] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[4] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("\n\nI have found a bigger dinning table so we are inviting some more guests")
invitenames3.unshift("Wania")
invitenames3.push("Areeba")
invitenames3[3] = "Sami"
console.log("\n\nHello " + invitenames3[0] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[1] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[2] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[3] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[4] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[5] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[6] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("\n\nI can invite only two people for dinner\n\n")
invitenames3.splice(2,5)
console.log("Hello " + invitenames3[0] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around")
console.log("Hello " + invitenames3[1] + "! How are you doing? \n \tWould you like to join a party at my place at 8-Aug-2023, i would love to see you around\n")
invitenames3.splice(0,2)
console.log(invitenames3)