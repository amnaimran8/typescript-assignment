/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
function show_magician(Magicians:string[]):
void
{
    console.log(Magicians[0])
    console.log(Magicians[1])
    console.log(Magicians[2])
}
let Magicians=["David Copperfield","David Blaine","Shin Lim"]
show_magician(Magicians)