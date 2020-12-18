import React from 'react'
import { Link } from 'react-router-dom'
import RecipesContext from '../RecipesContext'

export default function UserDashboardNav(props) {
    const { getSavedRecipes, getWeekdayRecipes, handleLogOut } = React.useContext(RecipesContext)
    //const { getSavedRecipes, getWeekdayRecipes, handleLogOut } = ctx

    return (
        <nav>
            <ul className="user-dashboard-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipe-search">Search Recipes</Link></li>
                <li><a href="#" onClick={getWeekdayRecipes}>Generate Recipes</a></li>
                <li><a href="#" onClick={getSavedRecipes}>Saved Recipes</a></li>
                <li>
                    <a href="/" onClick={handleLogOut}>Sign Out</a>
                </li>
            </ul>
        </nav>
    )

}