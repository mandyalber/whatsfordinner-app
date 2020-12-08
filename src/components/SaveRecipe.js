import React from 'react';
import config from '../config'

export default function SaveRecipe(props) {

    //console.log(props)
    function handleSaveClick() {
        console.log('handlesaveclick ran')

        const recipe = {
            recipeId: props.id,
            title: props.title,
            sourceUrl: props.sourceUrl,
            image: props.image,
            summary: props.summary
        }

        console.log(recipe)
        //fetch function to post to database
        fetch(`${config.API_ENDPOINT}/saved-recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        })
            .then(response => {
                if (response.status <= 200 || response.status > 300) {
                    return response.json().then(error => {
                        throw error
                    })
                }
                return response.json()
            })
            .then(responseJson => {
                console.log(responseJson)
            })
            .catch((error) => console.log(error))
    }

    return <button onClick={handleSaveClick}>Save</button>
}
