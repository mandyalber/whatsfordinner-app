import React from 'react'
import { render } from '@testing-library/react'
import RecipeSearch from './RecipeSearch'

//smoke test
test('renders RecipeSearch without crashing', () => {
  render(<RecipeSearch />)
})