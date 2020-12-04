import React, { useState } from 'react';
import { Route } from 'react-router-dom'
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

function App() {

  const [savedRecipes, setSavedRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  function getSavedRecipes() {
    console.log('savedrecipes ran')
    fetch(`${config.API_ENDPOINT}/recipes`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(recipeRes => setSavedRecipes({ savedRecipes: recipeRes }))
      .catch(error => console.log(error))
  }

  function getSearchedRecipes() {
    fetch(`${config.API_ENDPOINT}/recipes`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then(recipeRes => setSearchedRecipes({ searchedRecipes: recipeRes }))
      .catch(error => console.log(error))
  }
  

  function renderSidebarRoute() {
    return (
      <>
        <Route exact path='/' component={LandingPageNav} />
        <Route exact path='/create-account' component={CreateAccountNav} />
        <Route path='/user-dashboard' component={UserDashboardNav} />
        <Route path='/recipe-search' component={RecipeSearchNav} />
      </>
    )
  }

  function renderMainRoute() {
    return (
      <>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/create-account' component={CreateAccount} />
        <Route path='/user-dashboard' component={UserDashboard} />
        <Route path='/recipe-search' component={RecipeSearch} />
      </>
    )
  }

  const contextValue = {
    savedRecipes,
    searchedRecipes,
    getSavedRecipes,
    getSearchedRecipes,
  }
  
  return ( 
    <RecipesContext.Provider value={contextValue}>
      <div className="app">
        <header><h1>What's For Dinner?</h1></header>
        <nav>{renderSidebarRoute()}</nav>
        <main>{renderMainRoute()}</main>
        <footer>Footer</footer>
      </div>
    </RecipesContext.Provider>
  );
}

export default App;