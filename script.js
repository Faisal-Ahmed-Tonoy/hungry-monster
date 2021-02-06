document.getElementById('search_button').addEventListener('click', function() {
    const mealInput = document.getElementById('meal-input').value;
    const Url = `https://www.themealdb.com/api/json/v1/1/search.php?${mealInput}`

    fetch(Url)
        .then(response => response.json())
        .then(data => getWeather(data))
})