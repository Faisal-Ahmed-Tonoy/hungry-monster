//API Call
document.getElementById('search-button').addEventListener('click', function() {
        const mealInput = document.getElementById("meal-input").value;
        const Url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealInput}`)
        fetch(Url)
            .then(response => response.json())
            .then(data => displayMeal(data.meals))
            .catch(function() {
                alert(" Sorry,this item is not included in our menu!");


            });


    })
    // Creating Div and Class


const displayMeal = meal => {
        const foodDiv = document.getElementById('menuDiv');
        meal.forEach(meals => {
            const menuDiv = document.createElement('div');

            menuDiv.className = 'menu-item';
            const menuIfo = ` 
         
            <img src="${meals.strMealThumb}" onclick="displayMenuDetail('${meals.strMeal}')">
         <h3 class='food-detail' >${meals.strMeal}</h3>
         
         
        `
            menuDiv.innerHTML = menuIfo;
            foodDiv.appendChild(menuDiv);

        });


    }
    //Ingredients Details
const displayMenuDetail = names => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMenuInfo(data.meals[0]));

}
const renderMenuInfo = menu => {
    console.log(menu);
    const menuDiv = document.getElementById('menuDetail');
    menuDiv.innerHTML = ` 
     <img src="${menu.strMealThumb}">
     <h1>${menu.strMeal}</h1>
     <h3>Ingredients</h3>
     <p>${menu.strIngredient1}</p>
     <p>${menu.strIngredient2}</p>
     <p>${menu.strIngredient3}</p>
     <p>${menu.strIngredient4}</p>
     <p>${menu.strIngredient5}</p>
     <p>${menu.strIngredient6}</p>
     <p>${menu.strIngredient7}</p>
     <p>${menu.strIngredient8}</p>
     <p>${menu.strIngredient9}</p>
     <p>${menu.strIngredient10}</p>`
}