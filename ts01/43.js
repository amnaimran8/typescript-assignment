/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function make_great(Magiciansname) {
    return (Magiciansname[0] = "The great " + Magicians[0] + "");
    return (Magiciansname[1] = "The great " + Magicians[1] + "");
    return (Magiciansname[2] = "The great " + Magicians[2] + "");
}
var Magicians = ["David Copperfield", "David Blaine", "Shin Lim"];
var Magiciansname = ["David Copperfield", "David Blaine", "Shin Lim"];
var a = make_great(Magiciansname);
var b = make_great(Magiciansname);
var c = make_great(Magiciansname);
console.log(a);
console.log(b);
console.log(c);
function show_magician(Magicians) {
    return (Magicians[0]);
    return (Magicians[1]);
    return (Magicians[2]);
}
var d = show_magician(Magicians);
var e = show_magician(Magicians);
var f = show_magician(Magicians);
console.log(d);
console.log(e);
console.log(f);
// let Magicians=["David Copperfield","David Blaine","Shin Lim"]
// make_great(Magicians)
// show_magician(Magicians)
// let Magicians1=["David Copperfield","David Blaine","Shin Lim"]
