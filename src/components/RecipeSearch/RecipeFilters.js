import React from 'react';
import RecipesContext from '../RecipesContext';
import filterLists from './FilterListsStore'
import './RecipeSearch.css'

export default function RecipeFilters(props) {
    const { getSearchedRecipes } = React.useContext(RecipesContext)
    function getHTMLListOptions(array) {
        return array.map((cuisine, i) => <option key={i + 1} value={cuisine.toLowerCase()}>{cuisine}</option>)
    }

    const cuisineOptions = getHTMLListOptions(filterLists.cuisineList)
    const dietOptions = getHTMLListOptions(filterLists.dietList)
    const intolerancesOptions = getHTMLListOptions(filterLists.intolerancesList)

    function handleSubmit(e) {
        e.preventDefault()

        const { cuisine, diet, intolerances, includeIngredients, excludeIngredients } = e.target
        const filters = {
            cuisine: cuisine.value,
            diet: diet.value,
            intolerances: intolerances.value,
            includeIngredients: includeIngredients.value,
            excludeIngredients: excludeIngredients.value
        }
        getSearchedRecipes(filters)
    }

    return (
        <form className="recipe-filters" onSubmit={handleSubmit} >
            <fieldset>
                <legend>Filters:</legend>
                <label
                    htmlFor="cuisine"
                    className="filter-label">Cuisine Type:
                        </label>
                <select id="cuisine" name="cuisine">
                    <option key="0" value="">No filter</option>
                    {cuisineOptions}
                </select>
                <label
                    htmlFor="diet"
                    className="filter-label">Diet Type:
                    </label>
                <select id="diet" name="diet">
                    <option key="0" value="">No filter</option>
                    {dietOptions}
                </select>
                <label
                    htmlFor="intolerances"
                    className="filter-label">Intolerances:
                    </label>
                <select id="intolerances" name="intolerances">
                    <option key="0" value="">No filter</option>
                    {intolerancesOptions}
                </select>
                <label
                    htmlFor="includeIngredients"
                    className="filter-label">Include Ingredients:
                    </label>
                <input
                    type="text"
                    id="includeIngredients"
                    name="includeIngredients"
                    placeholder="e.g. broccoli, carrots"
                />
                <label
                    htmlFor="excludeIngredients"
                    className="filter-label">Exclude Ingredients:
                    </label>
                <input
                    type="text"
                    id="excludeIngredients"
                    name="excludeIngredients"
                    placeholder="e.g. peanuts"
                />
                <button type="submit">Submit</button>
                <button type="reset" value="Reset">Reset Filters</button>
            </fieldset>
        </form>
    )
}