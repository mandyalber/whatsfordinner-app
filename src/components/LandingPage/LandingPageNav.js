import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import RecipesContext from '../RecipesContext'
import './LandingPage.css'

//displays navigation options for landing page
export default function LandingPageNav(props) {
    const ctx = React.useContext(RecipesContext)

    return (
        < nav className="landing-page-nav" >
            {/*if the user is logged in, displays nav links. otherwise, displays login form*/}
            {ctx.isAuthenticated ?
                <div>
                    <ul>
                        <li><Link to="/user-dashboard">Dashboard</Link></li>
                        <li><Link to="/recipe-search">Search Recipes</Link></li>
                        <li><a href="/" onClick={ctx.handleLogOut}>Log Out</a></li>
                    </ul>
                </div> :
                <div>
                    <div className="login-sidebar">
                        <LoginForm emailLabel="sidebar-email" passwordLabel="sidebar-password" />
                    </div>
                    <ul>
                        <li className="log-in"><a href="#login-form">Log In</a></li>
                        <li><Link to="/create-account">Create an Account</Link></li>
                    </ul>
                </div>
            }
        </nav >
    )
}