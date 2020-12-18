import React from 'react';
import { render } from '@testing-library/react';
import RecipeFilters from './RecipeFilters';

//smoke test
test('renders RecipeFilters without crashing', () => {
  render(<RecipeFilters />);
});