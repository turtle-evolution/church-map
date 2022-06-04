// import environmentConstants from '../../config/constants/environmentConstants';

import moment from 'moment';

// const jwtDecode = require('jwt-decode');

function getUserFromToken(token) {
  // return jwtDecode(token);
}

function setRefreshToken(refreshToken) {
  localStorage.setItem('refresh_token', refreshToken);
}

function getRefreshToken() {
  return localStorage.getItem('refresh_token');
}

function removeRefreshToken() {
  return localStorage.removeItem('refresh_token');
}

// function checkRefreshTokenStillValid() {
//   const refreshToken = localStorage.getItem('refresh_token');
//   const now = moment();
//   const expireDate = moment.unix(jwtDecode(refreshToken).exp);
//   const validDateRange = expireDate.subtract(1, 'day');
//   if (now <= validDateRange) {
//     return true;
//   }
//   return false;
// }

export default {
  getUserFromToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken
  // checkRefreshTokenStillValid
};
