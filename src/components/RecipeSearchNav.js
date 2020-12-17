import React from 'react'
import { Link, Redirect } from 'react-router-dom'
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user-dashboard">Back to Dashboard</Link></li>
                <li><a href="/" onClick={TokenService.clearAuthToken}>Sign Out</a></li>
            </ul>
        </nav>
    )
}