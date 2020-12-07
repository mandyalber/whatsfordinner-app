import React from 'react';
import default_img from '../images/img_recipe_default.jpg'

export default function Recipe(props) {
    const { title, sourceUrl } = props
    const image = (!props.image) ? <img src={default_img} alt="recipe-img" /> : <img src={props.image} alt="recipe-img" />
    const steps = !props.analyzedInstructions ? '' : props.analyzedInstructions[0].steps.map(
        (step,i) => <li key={i}>{step.step}</li>)
    const ingredients = !props.nutrition.ingredients ? '' : props.nutrition.ingredients.map(
        (ingredient, i) =>
            <li key={i}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>)

    return (
        <div>
            {image}
            <h3>{title} </h3>
            <ul>{ingredients}</ul>
            <br/>
            <ul>{steps}</ul>
            <p>See more at <a href={sourceUrl} target="_blank" rel="noreferrer">{sourceUrl}</a></p>
        </div>
    )
}