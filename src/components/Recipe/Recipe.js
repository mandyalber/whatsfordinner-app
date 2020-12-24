import React from 'react'
import default_img from '../../images/img_recipe_default.jpg'
import './Recipe.css'

//displays the title, image, summary and url for each recipe
export default function Recipe(props) {
    const { title, sourceUrl } = props
    const image = !props.image ? <img src={default_img} alt="recipe-img" /> :
        <img src={props.image} alt="recipe-img" />
    const summary = !props.summary ? '' : props.summary.replace(/(<([^>]+)>)/gi, "")

    return (
        <div className="recipe">
            <h4>{title}</h4>
            {image}
            <p>{summary}</p>
            {sourceUrl &&
                <p>See full recipe at
                    <a href={sourceUrl} target="_blank" rel="noreferrer">{sourceUrl}</a>
                </p>}
        </div>
    )
}