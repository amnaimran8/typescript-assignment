/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified*/
function make_great(Magicians) {
    Magicians[0] = "The great " + Magicians[0] + "";
    Magicians[1] = "The great " + Magicians[1] + "";
    Magicians[2] = "The great " + Magicians[2] + "";
}
function show_magician(Magicians) {
    console.log(Magicians[0]);
    console.log(Magicians[1]);
    console.log(Magicians[2]);
}
var Magicians = ["David Copperfield", "David Blaine", "Shin Lim"];
make_great(Magicians);
show_magician(Magicians);
