// forloop
for (let i=0;i<=10;i++){
    //console.log(i);
}


//whileLoop
let index = 0;

// while(index<=10){
//  console.log(`value of index is ${index}`);
//  index = index+2
// }

//for of 

// ["" , "" , ""]
// [{},{},{}]
const arr=[1,2,3,4,5]

for(const num of arr){
   // console.log(num);
}

//map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set("Fr","France")
map.set('IN',"India")
//console.log(map);

//for loop
for (const [key,value] of map){
   // console.log(key, ':-',value)
}

const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"

    },
    {
        languageName:"Java",
        languageFileName:"java"

    },
    {
        languageName:"python",
        languageFileName:"py"

    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})