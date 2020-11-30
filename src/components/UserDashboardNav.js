import React from 'react'

export default function UserDashboardNav(lirolis) {
    return (
        <ul className="user-dashboard-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/recipe-search">Search Recipes</a></li>
            <li><a href="#">Generate Recipes</a></li>
            <li><a href="#">Saved Recipes</a></li>            
            <li><a href="/">Sign Out</a></li>
        </ul>
    )
}