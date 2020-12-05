import React from 'react';
import default_img from '../images/img_recipe_default.jpg'

export default function Recipe(props) {
    const { imageURL, name, originalURL } = props
    const ingredients = !props.ingredients ? 'no ingredients' :
        props.ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient.quantity} {ingredient.name}</li>)
    const steps = !props.steps ? 'no steps' : props.steps.map(step => step + " ")

    return (
        <div>
            {(!imageURL) ? <img src={default_img} alt="recipe-img" /> : <img src={imageURL} alt="recipe-img" />}
            <h3>{name} </h3>
            <ul>Ingredients Needed:
                {ingredients}
            </ul>
            <p>{steps}</p>
            <p>See more at <a href={originalURL}>Food.com</a></p>
        </div>
    )
}