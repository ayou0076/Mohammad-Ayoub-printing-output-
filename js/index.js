let a = 3;
let b = 5;
let c;

let value; 


value = 'let a = 3;\n';
value += 'let b = 5;\n';
value += 'let c;\n';
value += '--------------------\n';


value += 'a + b = ' + (a + b) + '\n';
value += 'a - b = ' + (a - b) + '\n';
value += 'a * b = ' + (a * b) + '\n';
value += 'a / b = ' + (a / b) + '\n';
value += 'a % b = ' + (a % b) + '\n';

value += 'a += b = ' + (a += b) + '\n';
value += 'a -= b = ' + (a -= b) + '\n';
value += 'a *= b = ' + (a *= b) + '\n';
value += 'a /= b = ' + (a /= b) + '\n';
value += 'a %= b = ' + (a %= b) + '\n';
value += 'a == b : ' + (a == b) + '\n';
value += 'a != b : ' + (a != b) + '\n';

value += 'a > b : ' + (a > b) + '\n';
value += 'a < b : ' + (a < b) + '\n';

value += '!a && !c : ' + (!a && !c) + '\n';
value += '!a || !c : ' + (!a || !c) + '\n';

alert(value);



//task 2

/* Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;
Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
Assign output with gotten expression;
Print the output in JavaScript console.
*/

let firstName = 'Mohammad';
let lastName = 'Ayoub';
let email = 'ayou0076@algonquinlive.com';

let output;

output = `My name is ${firstName} ${lastName}. You can contact me at ${email}`;

console.log(output);

