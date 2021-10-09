const API_URL = "https://api.github.com/users/";
const main = document.querySelector(".main");
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUserGithub(user){
    const resp = await fetch(API_URL+user);
    const respData = await resp.json();

    console.log(respData);
    createUserCard(respData);

}
function createUserCard(user){
    const card = document.createElement('div');
    card.classList.add('card');
    const cardHTML = `
    <div class="card">
    <div>
       <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
    </di>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="ul_info">
        <li>${user.followers}</li>
        <li>${user.following}</li>
        <li>${user.public_repos}</li>
        </ul>
    </div>
    </div>
    `;

    main.innerHTML = cardHTML;
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getUserGithub(searchTerm);
        search.value = "";
    }
});
getUserGithub("Francisco-S-Rangel");