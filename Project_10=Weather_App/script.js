const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const url =(city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const main = document.querySelector('.main');
const form = document.querySelector('.form');
const search = document.getElementById('search');

async function getWeatherBylocation(city){
    const resp = await fetch(url(city), {origin: "cors"});
    const respData = await resp.json();

    console.log(respData);
    addWeatherToPage(respData);
}
function addWeatherToPage(data){
    const temp = Kelvin_to_Celsius(data.main.temp);
    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
    <h2> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${temp}°C</h2>
    <small>${data.weather[0].description}</small>   
    <br>
    <small class="nameCity">${data.name}</small>
    `;

    main.innerHTML="";
    main.appendChild(weather);
}
function Kelvin_to_Celsius(K){
    return Math.floor(K - 273.15);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(search.value){
    getWeatherBylocation(search.value);}
});