import React, { useState } from 'react'
import store from '../store'
import Recipe from './Recipe'
import config from '../config'

export default function RecipeSearch(props) {

    const [recipes, setRecipes] = useState({recipes: []});

    function getRecipes() {
        fetch(`${config.API_ENDPOINT}/recipes`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status)
                }
                return response.json()
            })
            .then(recipeRes => setRecipes({recipes: recipeRes}))
            .catch(error => console.log(error))
    }
    getRecipes()
    return (
        <div className="recipe-search">
            <h2>Search for Recipes!</h2>
            <p>This is where some search results will show up!</p>
            <ul className="results">
                {store.map((recipe, i) =>
                    <li key={i}>
                        <Recipe {...recipe} /> <button>Save</button>
                    </li>
                )}
            </ul>
        </div >
    )
}