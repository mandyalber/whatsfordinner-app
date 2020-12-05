import React from 'react'
import Recipe from './Recipe'
import RecipesContext from './RecipesContext';

export default function RecipeSearch(props) {
    const ctx = React.useContext(RecipesContext)
    const recipes = ctx.searchedRecipes
    const search_recipes = recipes.length === 0 ? 'Search for some recipes!' :
        recipes.searchedRecipes.map((recipe, i) =>
            <li key={i}><Recipe {...recipe} /> <button>Save</button></li>)

    return (
        <div className="recipe-search">
            <h2>Search for Recipes!</h2>
            <p>This is where some search results will show up!</p>
            <fieldset><ul className="results">{search_recipes}</ul></fieldset>
        </div >
    )
}