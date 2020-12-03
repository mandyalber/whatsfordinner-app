import React from 'react';
import RecipesContext from './RecipesContext';

export default function UserDashboardNav(props) {
    return (
        <RecipesContext.Consumer>
            {(context) => {
                return (
                    <ul className="user-dashboard-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/recipe-search">Search Recipes</a></li>
                        <li><a href="#" onClick={context.getSavedRecipes()}>Generate Recipes</a></li>
                        <li><a href="#">Saved Recipes</a></li>
                        <li><a href="/">Sign Out</a></li>
                    </ul>
                )
            }}
        </RecipesContext.Consumer>
    )
}