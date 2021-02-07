document.getElementById('search-button').addEventListener('click', function() {
    const mealInput = document.getElementById("meal-input").value;
    const Url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealInput}`)
    fetch(Url)
        .then(response => response.json())
        .then(data => displayMeal(data.meals))
})

const displayMeal = meal => {
    for (let i = 0; i < meal.length; i++) {
        const meals = meal[i];
        console.log(meals.strMeal);



    }


}