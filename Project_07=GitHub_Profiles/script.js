const API_URL = "https://api.github.com/users/";
const main = document.querySelector(".main");
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUserGithub(username){
    const resp = await fetch(API_URL+username);
    const respData = await resp.json();

    createUserCard(respData);
    getRepos(username);
}
async function getRepos(username){
    const resp = await fetch(API_URL+username+"/repos");
    const respData = await resp.json();

    addReposToCard(respData);
}
function createUserCard(user){
    const card = document.createElement('div');
    card.classList.add('card');
    const cardHTML = `
    <div class="card">
    <div class="image-container">
       <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
    </di>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="ul_info">
        <li>${user.followers} - Followers.</li>
        <li>${user.following} - Following.</li>
        <li>${user.public_repos} - Public Repositories.</li>
        </ul>
        <h4>Repositories:</h4>
        <div class="repos"></div>
    </div>
    </div>
    `;

    main.innerHTML = cardHTML;
}
function addReposToCard(repos){
    const resp = document.querySelector(".repos");

    repos.forEach(repo =>{
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerHTML = repo.name;

        resp.appendChild(repoEl);
    });

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getUserGithub(searchTerm);
        search.value = "";
    }
});
