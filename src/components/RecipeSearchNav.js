import React from 'react'

export default function UserDashboardNav(props) {
    return (
        <div className="recipe-search-nav">
            <form className="recipe-filters"> 
                <fieldset>
                    <legend>Filters:</legend>
                    <label htmlFor="filter1" className="recipe-filters">Filter 1: </label>
                    <input id="filter1" type="text" className="recipe-filters" />
                    <label htmlFor="filter2">Filter 2: </label>
                    <input type="text" id="filter2" className="recipe-filters"/>
                    <label htmlFor="filter3">Filter 3: </label>
                    <input id="filter3" type="text"className="recipe-filters" />
                    <input type="submit" value="Submit" className="recipe-filters"/>
                </fieldset>
            </form>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/user-dashboard">Back to Dashboard</a></li>                
            </ul>
        </div>
    )
}