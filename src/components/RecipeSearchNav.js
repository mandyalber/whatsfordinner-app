import React from 'react'

export default function UserDashboardNav(props) {
    return (
        <div className="recipe-search-nav">
            <form action="">
                <fieldset>
                    <legend>Filters:</legend>
                    <label for="filter1">Filter 1: </label>
                    <input id="filter1" type="text" />
                    <label for="filter2">Filter 2: </label>
                    <input type="text" id="filter2" />
                    <label for="filter3">Filter 3: </label>
                    <input id="filter3" type="text" />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
            <p><a href="/user-dashboard">Back to Dashboard</a></p>
            <p><a href="/">Home</a></p>
        </div>
    )
}