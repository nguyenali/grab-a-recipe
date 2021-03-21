const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipecCloseBtn = document.getElementById('recipe-close-btn');

//event listners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);

//get meal list that matches with the ingredients
function getMealList(){
    let serachInputTxt = document.getElementById
    ('search-input').value.trim();
    console.log(serachInputTxt);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${serachInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="meal-item">
                        <div class="meal-img" data-id = "${meal.idMeal}">
                            <img src= "${meal.strMealThumb} alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>`
            });
            mealList.classList.remove('notFound');
        } else {
            html = "Sorry, we did not find any meals!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    })
}


//get recipe of the meal 
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        
}
