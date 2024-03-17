/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need
to enter a new username. If a username has not been used, print a message saying that the username is available*/
var currentUsers = ["ALI", "AMNA", "HASSAN", "IMRAN", "SOBIA"];
var newUsers = ["ALI", "AMNA", "WANIA", "ABDULLAH", "FATIMA"];
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var isTaken = false;
    for (var _a = 0, currentUsersLower_1 = currentUsersLower; _a < currentUsersLower_1.length; _a++) {
        var user = currentUsersLower_1[_a];
        if (user === newUser.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("The username " + newUser + " is not available. Please enter a new username.");
    }
    else {
        console.log("The username " + newUser + " is available.");
    }
}
