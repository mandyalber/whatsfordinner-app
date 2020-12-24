import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//smoke test
test('renders App without crashing', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
})