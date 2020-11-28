import React from 'react'
import store from '../store'
import Recipe from './Recipe'

export default function RecipeSearch(props) {
    return (
        <div className="recipe-search">
            <h2>Search for Recipes!</h2>
            <p>This is where some search results will show up!</p>
            <ul className="results">
                {store.map((recipe, i) =>
                    <li key={i}>
                        <Recipe                            
                            name={recipe.name}
                            ingredients={recipe.ingredients}
                            steps={recipe.steps}
                            imageURL={recipe.imageURL}
                            originalURL={recipe.originalURL}
                        /> <button>Save</button>
                    </li>
                )}
            </ul>            
        </div >
    )
}