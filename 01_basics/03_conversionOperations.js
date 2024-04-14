// conversion to Number

 let score = undefined
 console.log(typeof score);   //M1
 console.log(typeof(score));  //M2

 let valueInNumber = Number(score);
 console.log(typeof valueInNumber)
 console.log(valueInNumber)
 



//Conversion  to Number => O/P
/*
 undefined => NaN
 "33" => 33
 "33abc" => NAN
 true => 1; false => 0
 null => 0;
 "" => 0
 "Anand" => NaN(Not a Number);

*/
// 2. Conversion to boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
/*
Conversion to boolean => output
1 =>  true; 0 => false
"" => false
"Anand" => true
*/ 

//Conversion to string
let some = true;

let sumNumber = String(some)
console.log(typeof sumNumber);
console.log(sumNumber)

//Conversion to String
/*
33 => string
true => string
*/

