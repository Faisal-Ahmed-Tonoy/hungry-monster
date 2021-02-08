  //API fetch
  document.getElementById('search-button').addEventListener('click', function() {
          const mealInput = document.getElementById("meal-input").value;
          document.getElementById('error').innerHTML = "";
          document.getElementById('menuDiv').innerHTML = "";
          document.getElementById('menuDetail').innerHTML = "";

          const Url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
          fetch(Url)
              .then(response => response.json())
              .then(data => displayMeal(data.meals))
              .catch(error => displayError('Something Went Wrong!!! Please Try Again.'));



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
<ul>
<li> <i class="fa fa-check"></i>${menu.strIngredient1}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient2}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient3}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient4}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient5}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient6}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient7}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient8}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient9}</li>
<li> <i class="fa fa-check"></i>${menu.strIngredient10}</li>
<ul>`
  }

  const displayError = error => {
      const errorTag = document.getElementById('error');
      errorTag.innerText = error;

  }