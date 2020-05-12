    // Example queryURL for Giphy API
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webknox-recipes.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
            "x-rapidapi-key": "4c457334b2msh5737def0dea6309p1d2ea9jsne5378a33e6c8"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });