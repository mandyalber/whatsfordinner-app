import React from 'react'
import { Link } from 'react-router-dom'
import RecipeFilters from './RecipeFilters'
import RecipesContext from '../RecipesContext'
import './RecipeSearch.css'

//displays navigation options for recipe search page
export default function RecipeSearchNav(props) {
    const { handleLogOut } = React.useContext(RecipesContext)

    return (
        <nav className="recipe-search-nav">
            <div className="mobile-filters">
                <RecipeFilters
                    cuisineLabel="sidenav-cuisine"
                    dietLabel="sidenav-diet"
                    intoleranceLabel="sidenav-intolerance"
                    incIngredientsLabel="sidenav-incIngredients"
                    exclIngredientsLabel="sidenav-exclIngredients"
                />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user-dashboard">Dashboard</Link></li>
                <li><a href="/" onClick={handleLogOut}>Log Out</a></li>
            </ul>
            <div className="desktop-filters">
                <RecipeFilters
                    cuisineLabel="bottomnav-cuisine"
                    dietLabel="bottomnav-diet"
                    intoleranceLabel="bottomnav-intolerance"
                    incIngredientsLabel="bottomnav-incIngredients"
                    exclIngredientsLabel="bottomnav-exclIngredients"
                />
            </div>
        </nav>
    )
}