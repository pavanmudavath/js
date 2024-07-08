let a= 10;
let b=20;
let c=30;

if(true){
    let a=100;
  //  console.log("Inner: " , a);

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);
    two();
}
one();

console.log(addone(5));

function addone(num){
    return num+1
}

console.log(addtwo(5))

const addtwo = function(num){
    return num+2
}
console.log(addtwo(5))

