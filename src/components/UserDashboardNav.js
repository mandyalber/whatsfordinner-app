import React from 'react';
import RecipesContext from './RecipesContext';
import TokenService from './TokenService';

export default function UserDashboardNav(props) {
    const ctx = React.useContext(RecipesContext)
    const { getSavedRecipes, getWeekdayRecipes } = ctx

    return (
        <nav>
            <ul className="user-dashboard-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/recipe-search">Search Recipes</a></li>
                <li><a href="#" onClick={getWeekdayRecipes}>Generate Recipes</a></li>
                <li><a href="#" onClick={getSavedRecipes}>Saved Recipes</a></li>
                <li><a href="/" onClick={TokenService.clearAuthToken}>Sign Out</a></li>
                {/* 
                    Sign out should be an api request handled by your server and acted on a good response.
                */}
            </ul>
        </nav>
    )

}