import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from '../Header';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe('Header Component', () => {
  test('should take a snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('on click logo', () => {
    render(<Header />);
    const logo = screen.getByTestId('logo');
    fireEvent.click(logo);

    expect(mockHistoryPush).toBeCalled();
  });
});
