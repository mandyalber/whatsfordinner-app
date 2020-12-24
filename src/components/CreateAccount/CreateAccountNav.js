import React from 'react'
import { Link } from 'react-router-dom'

//displays navigation options for create account page
export default function CreateAccountNav(props) {
    
    return (
        <nav>
            <ul className="create-account-nav">
                <li><Link to="/">Home</Link></li>
                <li><a href="/">Log In</a></li>
            </ul>
        </nav>
    )
}