import React from 'react';
import default_img from '../images/img_recipe_default.jpg'

export default function Recipe(props) {
    const { title, sourceUrl } = props
    const image = (!props.image && !props.imageURL) ? <img src={default_img} alt="recipe-img" /> : <img src={props.image || props.imageURL} alt="recipe-img" />
    const summary = !props.summary ? '' : props.summary.replace(/<[^>]+>/g, '')
    const ingredients = !props.ingredients ? '' :
        props.ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient.quantity} {ingredient.name}</li>)
    const steps = !props.steps ? 'no steps' : props.steps.map(step => step + " ")
    

    return (
        <div>
            {image }
            <h3>{title || props.name} </h3> 
            {ingredients && <ul>{ingredients}</ul>}          
            <p>{summary || steps}</p>
            <p>See more at <a href={sourceUrl} target="_blank" rel="noreferrer">{sourceUrl}</a></p>
        </div>
    )
}