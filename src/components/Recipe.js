import React from 'react';

export default function Recipe(props) {
    const { imageURL, name, originalURL} = props
    const ingredients = !props.ingredients ? 'no ingredients' : props.ingredients.map((ingredient, i) =>
    <li key={i}>{ingredient.quantity} {ingredient.name}</li>)
    const steps = !props.steps ? 'no steps' : props.steps.map(step => step + " ")
    console.log(props) 

    return (
        <div>
            {(!imageURL) ? <img src="https://www.weightwatchers.ca/images/4105/dynamic/foodandrecipes/2015/02/us_img_recipe_default_600x600.jpg" alt="recipe-img" /> : <img src={imageURL} alt="recipe-img" />}
            <h3>{name} </h3>
            <ul>Ingredients Needed:
                {ingredients}
            </ul>
            <p>{steps}</p>
            <p>See more at <a href={originalURL}>Food.com</a></p>
        </div>
    )
}