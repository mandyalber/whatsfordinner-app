import React from 'react'
import { Link } from 'react-router-dom'
import RecipeFilters from './RecipeFilters'
import RecipesContext from '../RecipesContext' 
import './RecipeSearch.css'

export default function RecipeSearchNav(props) {
    const ctx = React.useContext(RecipesContext)
    return (
        <nav className="recipe-search-nav">
            <RecipeFilters
                getSearchedRecipes={ctx.getSearchedRecipes}
            />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user-dashboard">Back to Dashboard</Link></li>
                <li><a href="/" onClick={ctx.handleLogOut}>Log Out</a></li>
            </ul>
        </nav>
    )
}