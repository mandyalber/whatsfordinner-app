import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import CreateAccount from './components/CreateAccount';
import CreateAccountNav from './components/CreateAccountNav';
import LandingPage from './components/LandingPage';
import LandingPageNav from './components/LandingPageNav';
import RecipeSearch from './components/RecipeSearch';
import RecipeSearchNav from './components/RecipeSearchNav';
import UserDashboard from './components/UserDashboard';
import UserDashboardNav from './components/UserDashboardNav';
import './App.css'
import config from './config'
import RecipesContext from './components/RecipesContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const [savedRecipes, setSavedRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [weekdayRecipes, setWeekdayRecipes] = useState([]);

  function getSavedRecipes() {
    console.log('savedrecipes ran')
    fetch(`${config.API_ENDPOINT}/saved-recipes`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(recipeRes =>
        setSavedRecipes({ savedRecipes: recipeRes }),
        setWeekdayRecipes([])
      )
      .catch(error => console.log(error))
  }

  function getWeekdayRecipes() {
    console.log('weekdayrecipes ran')
    fetch(`${config.API_ENDPOINT}/saved-recipes/weekdays`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(recipeRes =>
        setWeekdayRecipes({ weekdayRecipes: recipeRes }),
        setSavedRecipes([])
      )
      .catch(error => console.log(error))
  }

  function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }

  function getSearchedRecipes(params) {
    console.log('getsearched ran')

    const queryString = formatQueryParams(params)
    const url = `${config.API_ENDPOINT}/search-recipes?` + queryString
    console.log(url)

    fetch(url)
      .then(response => {
        if (!response.ok) {/*check if response 2XX instead*/
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(recipeRes => setSearchedRecipes({ searchedRecipes: recipeRes }))
      .catch(error => console.log(error))
  }
 
  const contextValue = {
    savedRecipes,
    searchedRecipes,
    weekdayRecipes,
    getSavedRecipes,
    getWeekdayRecipes,
    getSearchedRecipes,
  }

  return (
    <RecipesContext.Provider value={contextValue}>
      <div className="app">
        <header><h1>What's For Dinner?</h1></header>
        <Switch>
          <Route path='/create-account' render={props => 
            <><CreateAccount /><CreateAccountNav /></>} />
          <ProtectedRoute path='/user-dashboard' render={props =>
            <><UserDashboard/><UserDashboardNav/></>} />
          <ProtectedRoute path='/recipe-search' render={props =>
           <><RecipeSearch/><RecipeSearchNav/></>}/>
          <Route path='/' render={props => 
            <><LandingPage/><LandingPageNav/></>} />
        </Switch>
        <footer>Footer</footer>
      </div>
    </RecipesContext.Provider>
  );
}

export default App;