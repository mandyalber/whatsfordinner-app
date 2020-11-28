import React from 'react'

export default function RecipeSearchNav(props) {
    return (
        <div className="user-dashboard">
            <h2>Welcome [User]!</h2>
            <p>Here is where we will display your recipes for the week once you click the button! It willl look something like this:</p>
            <ul>
                <li>Monday: Some Recipe info here.....</li>
                <li>Tuesday: Some Recipe info here.....</li>
                <li>Wednesday: Some Recipe info here.....</li>
                <li>Thursday: Some Recipe info here.....</li>
                <li>Friday: Some Recipe info here.....</li>
                <li>Saturday: Some Recipe info here.....</li>
                <li>Sunday: Some Recipe info here.....</li>
            </ul>
        </div >
    )
}