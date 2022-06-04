import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from '../NotFound';

describe('NotFound', () => {
  test('should take a snapshot', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders text is  No Component Defined', () => {
    render(<NotFound />);
    expect(screen.getByTestId('page-not-found')).toHaveTextContent(
      'No Component Defined'
    );
  });
});
