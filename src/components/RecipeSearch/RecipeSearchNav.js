import React from 'react'
import { Link } from 'react-router-dom'
import RecipeFilters from './RecipeFilters'
import RecipesContext from '../RecipesContext'
import './RecipeSearch.css'

export default function RecipeSearchNav(props) {
    const { handleLogOut } = React.useContext(RecipesContext)
    return (
        <nav className="recipe-search-nav">
            <div className="mobile-filters"><RecipeFilters/></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user-dashboard">Dashboard</Link></li>
                <li><a href="/" onClick={handleLogOut}>Log Out</a></li>
            </ul>
            <div className="desktop-filters"><RecipeFilters/></div>
        </nav>
    )
}