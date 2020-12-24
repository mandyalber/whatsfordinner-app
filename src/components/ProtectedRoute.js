import React from 'react'
import { Redirect } from 'react-router-dom'
import RecipesContext from './RecipesContext'

//redirects users to landing page if not logged in
export default function ProtectedRoute (props){
    const isAuthenticated = React.useContext(RecipesContext).isAuthenticated
    const Component = props.render

    return isAuthenticated ? <Component/> : <Redirect to='/'/>
}