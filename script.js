document.getElementById('search-button').addEventListener('click', function() {


    const mealInput = document.getElementById("meal-input").value;
    Url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}'
    fetch(Url)
        .then(response => response.json())
        .then(data => console.log(data))
})