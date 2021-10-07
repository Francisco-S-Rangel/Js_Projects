const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const main = document.querySelector(".main");

async function getMovies() {
    const resp = await fetch(API_URL);
    const respData = await resp.json();

    console.log(respData);
    respData.results.forEach((movie) => {
        const div_movie = document.createElement('div');
        div_movie.classList.add('movie');
        div_movie.innerHTML = 
        `
            <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="title">${movie.title}</h3>
                    <span class="${getClassbyRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
        `;

         main.appendChild(div_movie);
    });
    return respData;
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
getMovies();
