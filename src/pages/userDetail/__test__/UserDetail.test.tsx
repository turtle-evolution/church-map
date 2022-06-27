import React from 'react';
import { render, screen } from '@testing-library/react';

import axios from 'axios';
import UserDetail from '../UserDetail';

jest.mock('mock/api');

jest.mock('react-router-dom', () => ({
  useParams: () => {
    return {
      userId: '1'
    };
  }
}));

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeUser = {
  id: 1,
  name: 'Test User 1',
  address: {
    street: 'street'
  }
};

describe('UserDetail', () => {
  test('should take a snapshot', () => {
    const { asFragment } = render(<UserDetail />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should be render dataFake', async () => {
    mockedAxios.get.mockResolvedValue(fakeUser);
    render(<UserDetail />);
    expect(screen.getByTestId('user-detail')).toContainHTML(
      '<div class="spinner-custom"><span class="euiLoadingSpinner euiLoadingSpinner--large" /></div>'
    );
  });
});
