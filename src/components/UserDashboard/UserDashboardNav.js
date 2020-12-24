import React from 'react'
import { Link } from 'react-router-dom'
import RecipesContext from '../RecipesContext'

//displays navigation options for user dashboard page
export default function UserDashboardNav(props) {
    const { getSavedRecipes, getWeekdayRecipes, handleLogOut } = React.useContext(RecipesContext)

    return (
        <nav>
            <ul className="user-dashboard-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipe-search">Search Recipes</Link></li>
                <li><a href="#" onClick={getWeekdayRecipes}>Generate Recipes</a></li>
                <li><a href="#" onClick={getSavedRecipes}>Saved Recipes</a></li>
                <li><a href="/" onClick={handleLogOut}>Log Out</a></li>
            </ul>
        </nav>
    )
}

