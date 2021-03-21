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
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${serachInputTxt}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}