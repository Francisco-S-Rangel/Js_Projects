const ContriesAPI = 'https://restcountries.com/v3.1/name/';
const wikiAPI = 'https://en.wikipedia.org/wiki/';
const form = document.querySelector(".form");
const main = document.querySelector(".main");
const search = document.getElementById("search");

async function getCountryInformation(country){
    const resp = await fetch(ContriesAPI + country);
    const respData = await resp.json();
    console.log(respData);
    addCountryToPage(respData);
}
function addCountryToPage(data){
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = `
    <h2 class="title">${data[0].name.common}</h2>
    <a href="${wikiAPI+data[0].name.common }" target="_blank"><img src="${data[0].flags.png}"/></a>
    <small>Click in the flag to be directed to Wikipedia.</small>
    <div class="information">
    <h4>${data[0].region}</h4>
    <p class="sub">Country in ${data[0].subregion}.</p>
    <p><strong>Area:</strong>   ${data[0].area} Km²</p>
    <p><strong>Capital City:</strong>   ${data[0].capital[0]}.</p>
    <p><strong>Population:</strong>   ${data[0].population}.</p>
    </div>
    `;
    main.innerHTML="";
    main.appendChild(country);
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(search.value){
        getCountryInformation(search.value);
    }
});