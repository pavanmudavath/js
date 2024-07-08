const form=document.querySelector('form')
//const height=parseInt(document.querySelector('#height').value)
//by accessing the height value above gives us the empty value bcoz when  you click on this then only u need the values so u need to call this in hte event lister only.

form.addEventListener('submit',function(e){
    e.preventDefault() //this is bcz the form behavior is to submit this form so we are say stop defaul submitting okey.

    const height=parseInt(document.querySelector('#height').value)//parseInt bcz the value we get is in the string we are converitng it in to the integers
    const weight= parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height) /* this same as !=NAN*/){
        results.innerHTML=`Please give a valid height ${height}`;
    }  else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid Weight ${weight}`;
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        //Show the result
        if(bmi<18.6){
            results.innerHTML=`<span> under Weight ${bmi}</span>`
        }else if(bmi>18.6 && bmi<24.9){
         results.innerHTML=`<span> Normal Range ${bmi}</span>`
        }else{
             results.innerHTML=`<span>  OverWeight ${bmi}</span>`
        }
    }

})