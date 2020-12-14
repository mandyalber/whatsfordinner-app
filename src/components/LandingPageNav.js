import React from 'react'
import LoginForm from './LoginForm'
import TokenService from './TokenService'


export default function LandingPageNav(props) {
    return (
        <nav className="landing-page-nav">
            {!!TokenService.getAuthToken
                ? <LoginForm {...props}/>
                : <li><a href="/" onClick={TokenService.clearAuthToken}>Sign Out</a></li>}
            <ul>
                <li className="log-in"><a href="/user-dashboard">Log In</a></li>
                <li><a href="/create-account">Create an Account</a></li>
            </ul>
        </nav>
    )
}