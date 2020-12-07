import React from 'react';
import RecipeFilters from './RecipeFilters';

export default function RecipeSearchNav(props) {
    
    return (
        <div className="recipe-search-nav">
            <RecipeFilters/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/user-dashboard">Back to Dashboard</a></li>
            </ul>
        </div>
    )
}