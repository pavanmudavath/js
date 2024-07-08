const coding = ["js" , "ruby", "java" , "python", "cpp"]

const values=coding.forEach((item)=>{
    //console.log(item);
})

//console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>num>4)

// const newNums = myNums.filter((num)=>{ // when we use this scopes we need to write the return 
//     return num>4;
// })

const newNums=[];
 myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
 })
//console.log(newNums);


const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNumber = myNum.map((num)=>num+10)
//console.log(newNumber);

//reduce

 const myNo=[1,2,3]
// const myTotal = myNo.reduce(function(acc,currval){
//     return acc+currval
// },0)

const myTotal = myNo.reduce((acc,curr)=> acc+curr,0)

console.log(myTotal);