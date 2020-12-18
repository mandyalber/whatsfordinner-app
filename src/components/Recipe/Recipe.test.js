import React from 'react';
import { render } from '@testing-library/react';
import Recipe from './Recipe';

//smoke test
test('renders Recipe without crashing', () => {
  render(<Recipe />);
});