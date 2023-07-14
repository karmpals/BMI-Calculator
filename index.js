const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(){
    const heightEl = document.getElementById("height").value/100
    const weightEl = document.getElementById("weight").value

    const bmiValue = weightEl / (heightEl * heightEl);

    inputEl.value = bmiValue;
    if(bmiValue <18.5){
        weightConditionEl.innerText = "Under Weight"
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Normal"
    } else if (bmiValue >=25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Over Weight"
    } else if(bmiValue >=30){
        weightConditionEl.innerText = "Obesity"
    }
}

btnEl.addEventListener("click" , calculateBMI)