const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.querySelector(".main");
const form = document.getElementById('form');
const search = document.querySelector('.search');

getMovies(API_URL);
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
   
    showMovies(respData.results);
}
function showMovies(movies){
    main.innerHTML = '';
    movies.forEach((movie) => {
        const div_movie = document.createElement('div');
        div_movie.classList.add('movie');
        div_movie.innerHTML = 
        `
            <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="title">${movie.title}</h3>
                    <span class="${getClassbyRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
            <h4>Overview: </h4>
            ${movie.overview}
            </div>
        `;

         main.appendChild(div_movie);
    });

}
function getClassbyRate(vote){
    if(vote>=7){
        return 'green';
    }else if(vote >=5){
        return 'yellow';
    }else{
        return 'red';
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const serachTerm = search.value;

    if(serachTerm){
        getMovies(SEARCH_API+serachTerm);
        search.value='';
    }
});