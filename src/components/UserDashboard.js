import React from 'react'
import Recipe from './Recipe'
import RecipesContext from './RecipesContext';

export default function UserDashboard(props) {

    const ctx = React.useContext(RecipesContext);
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const recipes = ctx.savedRecipes
    const weekday_items = recipes.length===0 ? 'Generate Some Recipes by Clicking the Link' : weekdays.map((day, i) => <li key={i}>{day}:<br /><br /> <Recipe {...recipes.savedRecipes[i]} /> </li>);
    
    return (
        <div className="user-dashboard">
            <h2>Welcome [User]!</h2>
            <p>Here is where we will display your recipes for the week once you click the button! It will look something like this:</p>
            <ul>{weekday_items}</ul>
        </div >

    )
}