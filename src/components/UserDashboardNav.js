import React from 'react';
import RecipesContext from './RecipesContext';

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
                <li><a href="/">Sign Out</a></li>
            </ul>
        </nav>
    )

}