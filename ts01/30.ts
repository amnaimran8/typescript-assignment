/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a 
greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let array30:string[]=["ADMIN","AMNA","ALI","HASSAN","IMRAN"]
console.log("HELLO! WELCOME TO OUR WEBSITE")
for (let array3 of array30)
{
    if(array3=="ADMIN")
{
    console.log("Hello ADMIN, would you like to see a status report?")
}
else
console.log("Hello "+array30+", would you like to see a 1 status report?")
}