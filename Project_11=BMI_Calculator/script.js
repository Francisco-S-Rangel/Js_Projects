const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateBtn = document.querySelector('.calculate');

calculateBtn.addEventListener('click',()=>{
    let h = height.value;
    let w = weight.value;
    let bmi = Number(w/(h*h));
    bmi = bmi.toFixed(2);

    BmiStatus(bmi);
});
function BmiStatus(bmi){
    let condition ='';
    if(bmi < 18.5){
        condition = 'Underweight';
    }else if(bmi >= 18.5 && bmi < 24.9){
        condition = 'Normal weight';
    }else if(bmi >=24.9 && bmi < 30){
        condition =  'Pre-obesity';
    }else if(bmi>=30 && bmi < 35){
        condition = 'Obesity I';
    }else if(bmi>=35 && bmi < 40){
        condition = 'Obesity II';
    }else if(bmi>=40){
        condition = 'Obesity III';
    }
    updateBMI(bmi,condition);
}
function updateBMI(bmi,condition){
    document.getElementById('ibm').textContent = bmi;
    document.getElementById('ibm').style.color = 'purple';
    document.getElementById('classification').textContent = condition;
    document.getElementById('classification').style.color = 'purple';
}