const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("min");
const secondsEl = document.getElementById("sec");

let aux =new Date().getFullYear();
aux++;

const newYears = '1 Jan ' + aux;
console.log(newYears);

function countdown(){
    const newYearsDate = new Date(newYears);
    const currenctDate = new Date();

    const total_seconds = (newYearsDate-currenctDate)/1000;

    const days = Math.floor((total_seconds/ 3600)/24);
    const hours = Math.floor(total_seconds/ 3600)%24;
    const minutes = Math.floor(total_seconds/ 60)%60;
    const seconds = Math.floor(total_seconds) % 60;

    console.log(days,hours,minutes,seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time < 10? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);

