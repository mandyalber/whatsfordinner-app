import React from 'react';

export default function Recipe(props) {
    return (
        <div>
            {(!props.imageURL) ? <img src="https://www.weightwatchers.ca/images/4105/dynamic/foodandrecipes/2015/02/us_img_recipe_default_600x600.jpg" /> : <img src={props.imageURL} />}
            <h3>{props.name} </h3>
            <ul>Ingredients Needed:
                {props.ingredients.map(ingredient =>
                <li>{ingredient.quantity} {ingredient.name}</li>
            )}
            </ul>
            <p>{props.steps.map(step => step + " ")}</p>
            <p>See more at <a href={props.originalURL}>Food.com</a></p>
        </div>
    )
}