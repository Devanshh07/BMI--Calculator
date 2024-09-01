

const form = document.querySelector("form");
const res= document.querySelector(".result");

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt( document.querySelector("#weight").value);
    const bmi = (weight/((height*height)/10000)).toFixed(2);


    if(height ==='' || height <0 || isNaN(height)){
        res.innerHTML = `please enter vailid height`;
    } else if(weight ==='' || weight <0 || isNaN(weight)){
        res.innerHTML = `please enter vailid weight`;
    }
    else{
      res.innerHTML = `${bmi}`
    }

})