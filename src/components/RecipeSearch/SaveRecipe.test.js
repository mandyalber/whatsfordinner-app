import React from 'react'
import { render } from '@testing-library/react'
import SaveRecipe from './SaveRecipe'

//smoke test
test('renders SaveRecipe without crashing', () => {
  render(<SaveRecipe />)
})