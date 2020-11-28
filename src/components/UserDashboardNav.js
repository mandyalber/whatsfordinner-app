import React from 'react'

export default function UserDashboardNav(props) {
    return (
        <div className="user-dashboard-nav">
            <p><a href="/recipe-search">Search for New Recipes</a></p>
            <p><a href="#">Generate Recipes for the Week</a></p>
            <p><a href="#">See My Saved Recipes</a></p>
            <p><a href="/">Home</a></p>
            <p><a href="/">Sign Out</a></p>
        </div>
    )
}