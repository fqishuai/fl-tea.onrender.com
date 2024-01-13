import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login key word', () => {
  render(<Login />);
  const keyWordElement = screen.getByText(/登录/i);
  expect(keyWordElement).toBeInTheDocument();
});
