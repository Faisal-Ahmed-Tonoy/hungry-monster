document.getElementById('search-button').addEventListener('click', function() {
    const mealInput = document.getElementById("meal-input").value;
    const Url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealInput}`)
    fetch(Url)
        .then(response => response.json())
        .then(data => displayMeal(data.meals))
})

const displayMeal = meal => {
    const menusDiv = document.getElementById('menuDiv');
    for (let i = 0; i < meal.length; i++) {
        const meals = meal[i];
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        foodName.innerText = meals.strMeal;
        menuDiv.appendChild(foodName);
        menusDiv.appendChild(menuDiv);

        //  console.log(meals.strMeal);



    }


}