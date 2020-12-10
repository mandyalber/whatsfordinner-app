import React from 'react';
import FilterLists from './FilterListsStore'

export default function RecipeFilters({getSearchedRecipes}) {

    function getHTMLListOptions (array){
        return array.map((cuisine, i) => <option key={i + 1} value={cuisine.toLowerCase()}>{cuisine}</option>)
    }

    const cuisineOptions = getHTMLListOptions(FilterLists.cuisineList) 
    const dietOptions = getHTMLListOptions(FilterLists.dietList)
    const intolerancesOptions = getHTMLListOptions(FilterLists.intolerancesList)

    //add info hover for dropdowns
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
                    className="recipe-filters">Cuisine Type:
                        </label>
                <select id="cuisine" name="cuisine">
                    <option key="0" value="">No filter</option>
                    {cuisineOptions}
                </select>
                <label
                    htmlFor="diet"
                    className="recipe-filters">Diet Type:
                    </label>
                <select id="diet" name="diet">
                    <option key="0" value="">No filter</option>
                    {dietOptions}
                </select>
                <label
                    htmlFor="intolerances"
                    className="recipe-filters">Intolerances:
                    </label>
                <select id="intolerances" name="intolerances">
                    <option key="0" value="">No filter</option>
                    {intolerancesOptions}
                </select>
                <label
                    htmlFor="includeIngredients"
                    className="recipe-filters">Include Ingredients:
                    </label>
                <input
                    type="text"
                    id="includeIngredients"
                    name="includeIngredients"
                    className="recipe-filters"
                    placeholder="e.g. broccoli, carrots"
                />
                <label
                    htmlFor="excludeIngredients"
                    className="recipe-filters">Exclude Ingredients:
                    </label>
                <input
                    type="text"
                    id="excludeIngredients"
                    name="excludeIngredients"
                    className="recipe-filters"
                    placeholder="e.g. peanuts"
                />
                <button type="submit" className="recipe-filters">Submit</button>
                <button type="reset" value="Reset">Reset Filters</button>
            </fieldset>
        </form>
    )
}