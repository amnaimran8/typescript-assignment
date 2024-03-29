/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need 
to enter a new username. If a username has not been used, print a message saying that the username is available*/

let  currentUsers: string[] = ["ALI","AMNA","HASSAN","IMRAN","SOBIA"]
let newUsers: string[] = ["ALI","AMNA","WANIA","ABDULLAH","FATIMA"]
const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (const newUser of newUsers) 
{
    let isTaken = false;
    for (const user of currentUsersLower) 
    {
        if (user === newUser.toLowerCase()) 
        {
            isTaken = true;
            break;
        }
    }

if (isTaken) 
    {
        console.log("The username "+newUser+" is not available. Please enter a new username.")
    } 
    else
    {
        console.log("The username "+newUser+" is available.")
    }
}


