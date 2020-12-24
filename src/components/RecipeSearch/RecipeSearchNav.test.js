import React from 'react'
import { render } from '@testing-library/react'
import RecipeSearchNav from './RecipeSearchNav'
import { BrowserRouter } from 'react-router-dom'

//smoke test
test('renders RecipeSearchNav without crashing', () => {
  render(<BrowserRouter><RecipeSearchNav /></BrowserRouter>)
})