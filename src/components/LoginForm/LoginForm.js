import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import config from '../../config'
import TokenService from '../TokenService'
import RecipesContext from '../RecipesContext'
import './LoginForm.css'

//displays login form fields and authenticates user
export default function LoginForm(props) {
  const history = useHistory()
  const [error, setError] = useState({ error: null })
  const { handleLogIn } = React.useContext(RecipesContext)

  function handleSubmitJwtAuth(e) {
    e.preventDefault()
    setError({ error: null })
    const { email, password } = e.target

    fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        handleLogIn(res.name)
        history.push('/user-dashboard')
      })
      .catch(res => {
        setError({ error: res.error })
      })
  }

  return (
    <form className='login-form' id='login-form' onSubmit={handleSubmitJwtAuth}>
      <div role='alert'>
        {error.error && <p className='red'>{error.error}</p>}
      </div>
      <label htmlFor={props.emailLabel}>Email: </label>
      <input required name='email' id={props.emailLabel} />
      <label htmlFor={props.passwordLabel}>Password: </label>
      <input required name='password' type='password' id={props.passwordLabel} />
      <button type='submit'>Login</button>
    </form>
  )
}
