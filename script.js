const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipecCloseBtn = document.getElementById('recipe-close-btn');

//event listners
searchBtn.addEventListener('click', getMealList);

//get meal list that matches with the ingredients
function getMealList(){
    let serachInputTxt = document.getElementById
    ('search-input').value.trim();
    console.log(serachInputTxt);
}