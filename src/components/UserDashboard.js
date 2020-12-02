import React from 'react'
import Recipe from './Recipe'
import store from '../store'

export default function UserDashboard(props) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <div className="user-dashboard">
            <h2>Welcome [User]!</h2>
            <p>Here is where we will display your recipes for the week once you click the button! It will look something like this:</p>
            <ul>{weekdays.map((day, i) =>
                <li key={i}>{day}:<br /><br /><Recipe
                    {...store[i]} />
                </li>)}
            </ul>
        </div >
    )
}