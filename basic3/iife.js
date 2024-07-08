//Immediately Invoked Function Expressions (IIFF)

(function chai(){
    console.log(`DB connected`);
})();

(()=>{
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected ${name}`);
})("pavan");