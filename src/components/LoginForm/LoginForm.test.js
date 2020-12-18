import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

//smoke test
test('renders LoginForm without crashing', () => {
  render(<LoginForm />);
});