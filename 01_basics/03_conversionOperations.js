// conversion to Number

 let score = undefined
 console.log(typeof score);             //M1
 console.log(typeof(score));            //M2

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
console.log("********");

// ****************************   OPERATIONS ************************************
/*
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);

console.log(2*2);

console.log(2/2);
console.log(2%2);             // used in cryptography

*/
console.log(true);
console.log(+true);           // 1
//console.log(true+);         // error
console.log(+"");             //0   


// for string
let str1 = "Anand";
let str2 = "Singh";

console.log(str1 + str2);     // M1 combined print of string

let str3 = (str1 + str2);
console.log(str1 + str2);     // M2 fro combined String

// *** complex Situation in String

console.log("1" + 2);
console.log(2 + "1");          // it will treat all the values that defines their at first priority
console.log(1 + 2 + "1");
console.log("1" + 2 + 1);
//console.log(3 + 4 * 5 % 3);   // Wrong method to write the code  because its create a lot of misunderstanding
console.log((3 + 4) * 5 % 3); 









