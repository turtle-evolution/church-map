import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from '../Home';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeUsers = {
  data: [
    {
      id: 1,
      name: 'Test User 1',
      username: 'testuser1'
    },
    {
      id: 2,
      name: 'Test User 2',
      username: 'testuser2'
    }
  ]
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe('Should render <Home/>', () => {
  test('should be contains Welcome!', () => {
    render(<Home />);
    const headerElement = screen.getByText(/welcome!/i);

    expect(headerElement).toBeInTheDocument();
  });

  test('Redirects to correct URL on click', async () => {
    mockedAxios.get.mockResolvedValue(fakeUsers);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    await waitFor(() =>
      screen.getAllByRole('button').forEach((item) => {
        fireEvent.click(item);
      })
    );

    expect(mockHistoryPush).toBeCalled();
  });

  test('it displays a list of users', async () => {
    mockedAxios.get.mockResolvedValue(fakeUsers);
    render(<Home />);
    const userList = await waitFor(() => screen.getByTestId('user-list'));

    expect(userList).toBeInTheDocument();
  });

  test('it displays a row for each user', async () => {
    mockedAxios.get.mockResolvedValue(fakeUsers);
    render(<Home />);
    const userList = await waitFor(() => screen.findAllByTestId('user-item'));

    expect(userList).toHaveLength(2);
  });
});
