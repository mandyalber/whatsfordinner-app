import React from 'react'
import Recipe from './Recipe'
import RecipesContext from './RecipesContext';

export default function RecipeSearch(props) {

    return (
        <RecipesContext.Consumer>
            {(context) => {
                const recipes = context.searchedRecipes
                return (
                    <div className="recipe-search">
                        <h2>Search for Recipes!</h2>
                        <p>This is where some search results will show up!</p>
                        <ul className="results">
                            {recipes.map((recipe, i) =>
                                <li key={i}>
                                    <Recipe {...recipe} /> <button>Save</button>
                                </li>
                            )}
                        </ul>
                    </div >
                )
            }}
        </RecipesContext.Consumer>
    )

}