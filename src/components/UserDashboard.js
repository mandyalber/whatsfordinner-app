import React from 'react'
import Recipe from './Recipe'
import RecipesContext from './RecipesContext';

export default function UserDashboard(props) {


    return (
        <RecipesContext.Consumer>
            {(context) => {
                const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                const recipes = context.savedRecipes

                return (
                    <div className="user-dashboard">
                        <h2>Welcome [User]!</h2>
                        <p>Here is where we will display your recipes for the week once you click the button! It will look something like this:</p>
                        <ul>{weekdays.map((day, i) =>
                            <li key={i}>{day}:<br /><br />
                                <Recipe {...recipes[i]} />
                            </li>)}
                        </ul>
                    </div >
                )
            }}
        </RecipesContext.Consumer>
    )
}