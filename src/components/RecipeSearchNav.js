import React from 'react'
import RecipeFilters from './RecipeFilters'
import RecipesContext from './RecipesContext'
import TokenService from './TokenService'

export default function RecipeSearchNav(props) {

    return (
        <nav className="recipe-search-nav">
            <RecipeFilters
                getSearchedRecipes={React.useContext(RecipesContext).getSearchedRecipes}
            />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/user-dashboard">Back to Dashboard</a></li>
                <li><a href="/" onClick={TokenService.clearAuthToken}>Sign Out</a></li>
            </ul>
        </nav>
    )
}