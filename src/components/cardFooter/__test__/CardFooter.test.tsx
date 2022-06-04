import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CardFooter from '../CardFooter';

afterEach(cleanup);
test('should be contains Go', () => {
  const redirectPage = jest.fn();
  render(<CardFooter onClick={redirectPage} />);
  const headerElement = screen.getByText(/Go/i);
  expect(headerElement).toBeInTheDocument();
});
