/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(s, m) {
    if (s === void 0) { s = "large"; }
    if (m === void 0) { m = "I love ts"; }
    console.log("Size : " + s + " , Message : " + m + "");
}
make_shirt();
make_shirt("medium");
make_shirt("small", "hello");
