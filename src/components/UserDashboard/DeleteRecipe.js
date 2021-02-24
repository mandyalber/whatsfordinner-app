import React from 'react'
import config from '../../config'
import RecipesContext from '../RecipesContext'
import TokenService from '../TokenService'

//displays save button allowing users to post recipes to database 
export default function DeleteRecipe(props) {
    const { savedRecipes, setSavedRecipes } = React.useContext(RecipesContext)

    const handleDeleteClick = (e) => {
        e.preventDefault()

        const recipeId = e.target.value

        if (window.confirm(`Are you sure you want to delete ${props.title}?`)) {
            fetch(`${config.API_ENDPOINT}/saved-recipes/${recipeId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `bearer ${TokenService.getAuthToken()}`,
                    "Content-Type": "application/json",
                }
            })
                .then(() => {
                    setSavedRecipes(savedRecipes.filter(recipe =>
                        parseInt(recipe.recipeId) !== parseInt(recipeId)
                    ))
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div>
            <button
                className="delete"
                name="delete"
                value={props.recipeId}
                onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    )
}
