function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("N");
}

//sayMyName();
//aaruguments
// function addTwoNumbers(number1,number2){
//    console.log(number1+number2);
// }
// const result = addTwoNumbers(2,3);

// console.log("Result: ", result); //output : Result:  undefined


function addTwoNumbers(number1,number2){
   let result = number1+number2;
   return result;
 }
 const result = addTwoNumbers(2,3);
 
//  console.log("Result: ", result);

function calPrice(val1,val2,...num1){
    return num1;
}
console.log(calPrice(200,300,400,500));

const user={
    username:"hitesh",
    price:199
}