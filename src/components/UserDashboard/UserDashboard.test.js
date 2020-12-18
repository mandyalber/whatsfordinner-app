import React from 'react';
import { render } from '@testing-library/react';
import UserDashboard from './UserDashboard';

//smoke test
test('renders UserDashboard without crashing', () => {
  render(<UserDashboard />);
});