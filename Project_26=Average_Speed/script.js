const miles = document.querySelector(".mile");
const hours = document.querySelector(".hour");
const resul= document.getElementById("result");

function calculate(){

    let mile = miles.value;
    let hour = hours.value;

    let result = mile/hour;

    showResult(result);
}

function showResult(result){
    document.getElementById("result").textContent = result + "mph";
    document.getElementById("result").style.color = "black"
}