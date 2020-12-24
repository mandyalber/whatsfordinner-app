import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import RecipesContext from '../RecipesContext'
import './LandingPage.css'

export default function LandingPage(props) {
    const { isAuthenticated } = React.useContext(RecipesContext)

    return (
        <main className="landing-page">
            <h2>Welcome to What's For Dinner!</h2>
            <p>Here you can browse search for recipes, save as many as you like, then generate a whole weeks worth of dinners at once! </p>
            <p>No more asking yourself daily, <span className="slogan">"what's for dinner?"</span></p>
            {isAuthenticated ? '' :
                <div>
                    <p>Log in or <Link to="/create-account">create an account</Link> now, and start cooking!</p>
                    <div  className="mainpage"><LoginForm {...props} /></div>
                </div>}
        </main >
    )
}