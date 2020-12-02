import React from 'react'

export default function CreateAccount(props) {
    return (
        <div className="create-account-form">
            <h2>Create Your Account</h2>
            <form action="">
                <fieldset>
                    <legend>Enter your info</legend>
                    <label htmlFor="fname">First Name: </label>
                    <input id="fname" type="text" />
                    <label htmlFor="lname">Last Name: </label>
                    <input id="lname" type="text" />
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" />
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="" id="password" />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    )
}