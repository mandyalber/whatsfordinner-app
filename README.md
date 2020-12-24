# What's For Dinner App

## Live App Link

https://whatsfordinner-app.vercel.app/

## Summary

This App allows users to browse through thousands of recipes with 5 filter options. User's can then save recipes they like to their account and return later to generate a full week of meal ideas.

## Technology Used

This app was built using React.js & Vanilla CSS for the Frontend and Node.js, Express & Postgres for the Backend.

## Screenshots

#### Landing Page
![Landing Page Screenshot](src/images/screenshots/landingpage.PNG?raw=true "Landing Page")

#### Create Account
![Create Account Page Screenshot](src/images/screenshots/createaccount.PNG?raw=true "Create Account Page")

#### User Dashboard
![User Dashboard Page Screenshot](src/images/screenshots/dashboard.PNG?raw=true "User Dashboard Page")

#### Recipe Search
![Recipe Search Page Screenshot](src/images/screenshots/search.PNG?raw=true "Recipe Search Page")

## API Documentation

The API is hosted by Heroku and accepts the following requests

##### Saved Recipes

Returns json data about recipes a user has saved.
URL /api/saved-recipes
Method: GET, POST
Params: user.id
Success Response:
  Code: 200, 201
  Content: 
    { userId: 1, recipeId: 777777, title: "Recipe", sourceUrl: "recipe.com", image: "recipeimage.com", summary: "Recipe Summary Description" }
    Error Response:
    Code: 401 UNAUTHORIZED
    Content: { error: 'Missing bearer token' }

##### Weekday Recipes

Returns json data with a random 7 recipes a user has saved.
URL /api/saved-recipes/weekdays
Method: GET
Params: user.id
Success Response:
  Code: 200
  Content: 
    { userId: 1, recipeId: 777777, title: "Recipe", sourceUrl: "recipe.com", image: "recipeimage.com", summary: "Recipe Summary Description" }
    Error Response:
    Code: 401 UNAUTHORIZED
    Content: { error: 'Missing bearer token' }

##### Search Recipes

Fetches json data from Spoonacular API, and returns json data about recipes to user.
URL /api/search-recipes
Method: GET
Params: user chosen filters as query params
Success Response:
  Code: 200
  Content: 
    { userId: 1, recipeId: 777777, title: "Recipe", sourceUrl: "recipe.com", image: "recipeimage.com", summary: "Recipe Summary Description" }
    Error Response:
    Code: 401 UNAUTHORIZED
    Content: { error: 'Missing bearer token' }
