const meals = document.getElementById('meals');
const fav_meals = document.getElementById('fav-meals');
const searchTerm = document.getElementById('search-term');
const searchBtn = document.getElementById('search');
const mealPopup = document.getElementById('meal-popup');
const popupBtn = document.getElementById("close-popup");

getRandomMeal();
fetchFavMeals();
async function getRandomMeal(){
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addMeal(randomMeal, true);
}
async function getMealbyId(id){
    const resp = await fetch( "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const respData = await resp.json();
    const Meal_by_ID = respData.meals[0];
    return Meal_by_ID;
}
async function getMealsBySearch(term){
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
    );
    const respData = await resp.json();
    const Meal_by_Search = respData.meals;

    return Meal_by_Search;
}
function addMeal(mealData,random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = ` 
    <div class="meal-header">
        ${random ? ` 
        <span class="random">Random Recipe</span>`
    : " "}
        <img 
        src="${mealData.strMealThumb}"
         alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn">
            <i class="fas fa-heart"></i>
        </button>
    </div>`;

    const btn = meal.querySelector('.meal-body .fav-btn');
    btn.addEventListener('click',()=>{
    if(btn.classList.contains('active')){
        removeMealFromLS(mealData.idMeal);
        btn.classList.remove('active');
    }else{
        addMealfromLS(mealData.idMeal);
        btn.classList.add('active');
    }
    fetchFavMeals();
    });

    meals.appendChild(meal);
}
function addMealfromLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}
function removeMealFromLS(mealId){
    const mealIds = getMealsFromLS();
    localStorage.setItem(
        "mealIds",
        JSON.stringify(mealIds.filter((id) => id !== mealId))
    );
}
function getMealsFromLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));
    return mealIds === null ? [] : mealIds;
}
async function fetchFavMeals(){
    fav_meals.innerHTML = "";
     const mealIds = getMealsFromLS();

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        let meal = await getMealbyId(mealId);
        addMealtoFav(meal);
    }
}
function addMealtoFav(mealData){
    const favMeal = document.createElement('li');
    favMeal.innerHTML = 
    ` <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
      <span>${mealData.strMeal}</span> <button class="clear"><i class="fas fa-window-close"></i></button>`;

      const btn = favMeal.querySelector('.clear');
      btn.addEventListener('click', () =>{
          removeMealFromLS(mealData.idMeal);

          fetchFavMeals();
      });

    fav_meals.appendChild(favMeal);

}
searchBtn.addEventListener('click', async ()=>{
    meals.innerHTML = '';
    const search = searchTerm.value;
    const aux_meals = await getMealsBySearch(search);
    
    if(aux_meals){
    aux_meals.forEach((meal) => {
        addMeal(meal);
    });}
});