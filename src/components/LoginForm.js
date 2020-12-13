import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import config from '../config'
import TokenService from './TokenService'
//import AuthApiService from '../../services/auth-api-service'

export default function LoginForm(props) {
  const history = useHistory();
  const [error, setError] = useState({ error: null });

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
        
      })
      .then(TokenService.hasAuthToken ? history.push('/user-dashboard') : history.push('/'))
      .catch(res => {
        setError({ error: res.error })
        console.log(res)
      })
  }

  return (
    <form className='login-form' onSubmit={handleSubmitJwtAuth}>
      <div role='alert'>
        {error.error && <p className='red'>{error.error}</p>}
      </div>
      <label htmlFor='login-form_email'>Email: </label>
      <input required name='email' id='LoginForm__user_name' />
      <label htmlFor='login-form__password'>Password: </label>
      <input required name='password' type='password' id='login-form__password' />
      <button type='submit'>Login</button>
    </form>
  )
}
