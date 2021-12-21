let fname = 'Vedant';
let lname = 'R';
let age = prompt("Guess Vedant's age..");

//old way

//let result = fname + ' ' + lname + ' is ' + age + ' years old';
//alert(result);

//using template string
let result = ` ${fname} ${lname} is ${age} years old`;
alert(result);
