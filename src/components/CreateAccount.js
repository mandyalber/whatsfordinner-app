import React from 'react'

export default function CreateAccount(props) {
    return (
        <div className="create-account-form">
            <h2>Create Your Account</h2>
            <form action="">
                <fieldset>
                    <legend>Enter your info</legend>
                    <label for="username">Username: </label>
                    <input id="username" type="text" />
                    <label for="password">Password: </label>
                    <input type="text" name="" id="password" />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    )
}