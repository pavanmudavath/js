const user = {
  username:"pavan",
  price:999,
  welcomeMessage:function(){
    console.log(`${this.username},welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage();
// user.username="pk"
// user.welcomeMessage();
//console.log(this);

// function chai(){
//     let username="PAvan"
//     console.log(this.username);
// }
// chai();         o/p : undefine becouse this is not working in this function

// const chai = function (){
//     let username = "pavan"
//     console.log(this);
// }
// chai();          //  for this all so the not work

// const chai = ()=>{
//     let username = "pavan"
//     console.log(this);
// }
// chai();

//Arrow function
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
//const addTwo = (num1,num2)=>num1+num2  //

//const addTwo = (num1,num2)=>(num1 +num2)

const addTwo = (num1 , num2 )=>{username:"pavan"}


console.log(addTwo(3,5));
