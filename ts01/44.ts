/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that 
collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
function three times, using a different number of arguments each time.*/
function sandwich(...things: string[])
{
    console.log("New ingredients")
    for(let s of things)
    {
        console.log(s)
    }
}
sandwich("Chicken","Ham\n")
sandwich("Ham\n")
sandwich("Beef","Parsley","Lettuce\n")