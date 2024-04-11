const accountId = '144553'; // constant never alllowed to change
let accountEmail ="anandsingh8@gmail.com"; //its may be changes
var accountPassword = "12345";
accountCity = "jaipur";   // this is also not allowed due to its create missunderstanding
let accountStatement;    //undefined : never use

//accountId = 2 //due to constant not change(not allowed ) 
/*
1. node js is here to check the codes of js and evaluate
2. we use only let and const and forget var because of issue in block scope and functional scope
*/ 
accountEmail = "As.com"
accountPassword = "423"
accountCity = "delhi"


 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountStatement])