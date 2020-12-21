import React from 'react'
import Recipe from '../Recipe/Recipe' 
import RecipesContext from '../RecipesContext';
import SaveRecipe from './SaveRecipe';
import './RecipeSearch.css'

export default function RecipeSearch(props) {
    const ctx = React.useContext(RecipesContext)
    const recipes = ctx.searchedRecipes
    const search_recipes = recipes.length === 0 ? 'Search for some recipes!' :
        recipes.searchedRecipes.recipes.map((recipe, i) =>
            <li key={i}><Recipe {...recipe} /><SaveRecipe {...recipe} /></li>)
    const filters = !ctx.searchedRecipes.searchedRecipes ? '' : ctx.searchedRecipes.searchedRecipes.filters
        
    return (
        <main className="recipe-search">
            <h2>Search for Recipes!</h2>
            <p>You can filter based on diet, cuisine, food intolerances, ingredients you already have, or ingredients you don't like. Or any combination of the above.</p>
            <p>Save the ones that sound yummy for later, so you won't be caught in a never ending loop of "What's for dinner?", "I don't know, what do you want?"</p>
            <fieldset>
                <ul className="results">
                    {search_recipes.length ? search_recipes : `Sorry, no results for: ${filters && filters}. Try editing your filters and searching again.`}
                </ul>
            </fieldset>
        </main >
    )
}