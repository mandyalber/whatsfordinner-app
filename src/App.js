import React from 'react';
import {Route} from 'react-router-dom'
import CreateAccount from './components/CreateAccount';
import CreateAccountNav from './components/CreateAccountNav';
import LandingPage from './components/LandingPage';
import LandingPageNav from './components/LandingPageNav';
import RecipeSearch from './components/RecipeSearch';
import RecipeSearchNav from './components/RecipeSearchNav';
import UserDashboard from './components/UserDashboard';
import UserDashboardNav from './components/UserDashboardNav';
import './App.css'

function App() {

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

  return (
    <div class="app">
      <header><h1>What's For Dinner?</h1></header>
      <sidebar>{renderSidebarRoute()}</sidebar>
      <main>{renderMainRoute()}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;