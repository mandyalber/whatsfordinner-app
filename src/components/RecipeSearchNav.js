import React from 'react';
import RecipesContext from './RecipesContext';

export default function RecipeSearchNav(props) {
    return (
        <RecipesContext.Consumer>
            {(context) => {
                return (
                    <div className="recipe-search-nav">
                        <form className="recipe-filters">
                            <fieldset>
                                <legend>Filters:</legend>
                                <label htmlFor="filter1" className="recipe-filters">Filter 1: </label>
                                <input id="filter1" type="text" className="recipe-filters" />
                                <label htmlFor="filter2">Filter 2: </label>
                                <input type="text" id="filter2" className="recipe-filters" />
                                <label htmlFor="filter3">Filter 3: </label>
                                <input id="filter3" type="text" className="recipe-filters" />
                                <input onClick={context.getSearchedRecipes} type="button" value="Submit" className="recipe-filters" />
                            </fieldset>
                        </form>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/user-dashboard">Back to Dashboard</a></li>
                        </ul>
                    </div>
                )
            }}
        </RecipesContext.Consumer>
    )
}