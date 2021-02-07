document.getElementById('search-button').addEventListener('click', function() {
    const mealInput = document.getElementById("meal-input").value;
    const Url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealInput}`)
    fetch(Url)
        .then(response => response.json())
        .then(data => displayMeal(data.meals))
})

const displayMeal = meal => {
    const menusDiv = document.getElementById('menuDiv');
    meal.forEach(meals => {
        const menuDiv = document.createElement('div');

        menuDiv.className = 'menu-item';
        const menuIfo = `
            <img src="${meals.strMealThumb}">
         <h3 class='food-detail' >${meals.strMeal}</h3> `
        menuDiv.innerHTML = menuIfo;
        menusDiv.appendChild(menuDiv);


    });
    menuDiv.onclick = function() {
        alert("hello");
    }
}