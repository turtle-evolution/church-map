import axios from 'axios';

import history from '../services/helper/history';
import jwtHelpers from '../services/helper/jwtHelpers';

import environmentConstants from './constants/environmentConstants';
import NotFoundUrlList from './constants/NotFoundUrlList';
import UnauthorizedUrlList from './constants/UnauthorizedUrlList';

const httpHandler = axios.create({
  baseURL: environmentConstants.ROOT_URL
});

const RETRY_SYMBOL = Symbol('retry');

httpHandler.interceptors.request.use(
  function intercept(config) {
    return {
      ...config,
      withCredentials: 'true'
    };
  },
  function interceptError(error) {
    return Promise.reject(error);
  }
);

httpHandler.interceptors.response.use(
  function intercept(response) {
    return response;
  },
  function interceptError(error) {
    const originalRequest = error.config;

    switch (error.response.status) {
      case 401:
        if (originalRequest.url.includes(UnauthorizedUrlList)) {
          return Promise.reject(error);
        }
        return history.push('/sign-out');

      case 404:
        if (originalRequest.url.includes(NotFoundUrlList)) {
          return Promise.reject(error);
        }
        return history.push('/not-found');

      case 403:
        if (originalRequest.url === `/api/users/refresh-token`) {
          jwtHelpers.removeRefreshToken();
          history.push('/');
          return Promise.reject(error);
        }
        if (!originalRequest[RETRY_SYMBOL]) {
          originalRequest[RETRY_SYMBOL] = true;
          const refreshToken = jwtHelpers.getRefreshToken();
          return httpHandler
            .post('/users/refresh-token', refreshToken, {
              headers: {
                'Content-Type': 'text/plain'
              }
            })
            .then((res) => {
              if (res.status === 201 || res.status === 200) {
                return axios(originalRequest);
              }
            });
        }
        break;
      default:
        return Promise.reject(error);
    }
  }
);

export default httpHandler;
