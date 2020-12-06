import React from 'react';
import RecipesContext from './RecipesContext';

export default function RecipeFilters(props) {
    const ctx = React.useContext(RecipesContext)
    const getSearchedRecipes = ctx.getSearchedRecipes
    const cuisineList = ['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese']
    const cuisineOptions = cuisineList.map((cuisine, i) => <option key={i + 1} value={cuisine.toLowerCase()}>{cuisine}</option>)
    const dietList = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']
    const dietOptions = dietList.map((diet, i) => <option key={i + 1} value={diet.toLowerCase()}>{diet}</option>)
    const intolerancesList = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat']
    const intolerancesOptions = intolerancesList.map((intolerances, i) => <option key={i + 1} value={intolerances.toLowerCase()}>{intolerances}</option>)

    function handleSubmit(e) {
        e.preventDefault()
        // get the form fields from the event
        const { cuisine, diet, intolerances, includeIngredients, excludeIngredients } = e.target
        const params = {
            cuisine: cuisine.value,
            diet: diet.value,
            intolerances: intolerances.value,
            includeIngredients: includeIngredients.value,
            excludeIngredients: excludeIngredients.value
        }
        getSearchedRecipes(params)
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
                />
                <button type="submit" className="recipe-filters">Submit</button>
            </fieldset>
        </form>
    )
}