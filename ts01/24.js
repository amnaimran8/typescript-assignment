"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more
tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
let test = "AMNA";
console.log("IS THE WORD 'AMNA'(WHICH IS IN STRING) IS SAME AS AMNA ? I PREDICT TRUE");
console.log(test == "AMNA");
console.log("IS THE WORD 'AMNA'(WHICH IS IN STRING) IS NOT SAME AS ALI ? I PREDICT TRUE");
console.log(test != "ALI");
console.log("IS THE WORD 'AMNA'(WHICH IS IN STRING) IS NOT SAME AS AMNA ? I PREDICT FALSE");
console.log(test != "AMNA");
console.log("IS THE WORD 'AMNA'(WHICH IS IN STRING) IS NOT SAME AS amna ? I PREDICT FALSE");
console.log(test.toLowerCase() != "amna");
console.log("IS THE WORD 'AMNA'(WHICH IS IN STRING) IS SAME AS amna ? I PREDICT TRUE");
console.log(test.toLowerCase() == "amna");
let num2 = 8;
console.log("IS NUMBER '8' IS EQUAL TO '8'? I PREDICT TRUE");
console.log(num2 == 8);
console.log("IS NUMBER '8' NOT EQUAL TO '19'? I PREDICT TRUE");
console.log(num2 != 19);
console.log("IS NUMBER '8' GREATOR THAN OR IS EQUAL TO '27'? I PREDICT FALSE");
console.log(num2 >= 27);
console.log("IS NUMBER '8' LESS THAN OR IS EQUAL TO '17'? I PREDICT TRUE");
console.log(num2 <= 17);
console.log("IS NUMBER '8' GREATOR THAN '2' AND LESS THAN '10'? I PREDICT TRUE");
console.log(num2 > 2 && num2 < 10);
console.log("IS NUMBER '8' GREATOR THAN '7' OR LESS THAN '14'? I PREDICT TRUE");
console.log(num2 > 7 || num2 < 14);
let names3 = ["Ali", "Amna", "Hassan", "Imran", "Sobia"];
console.log("IS THE WORD 'ALI'(WHICH IS IN STRING) IS SAME AS ALI ? I PREDICT TRUE");
console.log(names3.includes("Ali"));
console.log("IS THE WORD 'WANIIA'(WHICH IS IN STRING) IS SAME AS ALI ? I PREDICT FALSE");
console.log(!names3.includes("WANIIA"));
