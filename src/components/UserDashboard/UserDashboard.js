import React from 'react'
import Recipe from '../Recipe/Recipe'
import RecipesContext from '../RecipesContext'
import DeleteRecipe from './DeleteRecipe'
import './UserDashboard.css'

//displays saved recipes or random weekly recipes
export default function UserDashboard(props) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const { savedRecipes, weekdayRecipes, userName } = React.useContext(RecipesContext)
    const weekday_items = weekdayRecipes.length === 0 ? '' : weekdays.map((day, i) => <li key={i}><h3>{day}:</h3><br /><br /> <Recipe {...weekdayRecipes[i]} /> </li>)
    const saved_items = !savedRecipes ? '' : savedRecipes.map((recipe, i) =>
        <li key={i}><Recipe {...recipe} /><DeleteRecipe {...recipe} /></li>)

    return (
        <main className="user-dashboard">
            <h2>Welcome {userName}!</h2>
            <p>This is your User Dashboard. From here you can search for new recipes, generate some random recipes for the week, or look through your saved recipes. Let's get cooking!</p>
            {weekday_items || saved_items ?
                <fieldset><ul>{weekday_items || saved_items}</ul></fieldset>
                : ''
            }
        </main >
    )
}