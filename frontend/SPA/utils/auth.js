/* 
 * This file is based on:
 * https://auth0.com/blog/vuejs2-authentication-tutorial/
 * Rewritten by Stein Roald Bolle, December 2017, for Django REST and JWT.
*/

import decode from 'jwt-decode';
import axios from 'axios'
import Router from 'vue-router';
const ACCESS_TOKEN_KEY = 'access_token';

const BACKEND_URL = 'http://192.168.50.11:8000'  // REPLACE with your own Backend-URL
const REDIRECT_URL_AFTER_LOGIN = '/users';


export function login(username, password) {

  const url = `${BACKEND_URL}/api-token-auth/`
  axios.post(url, { username: username, password: password })
  .then(function (response) {
    // console.log('response: ', response)
    console.log('response.data.token: ', response.data.token)
    localStorage.setItem(ACCESS_TOKEN_KEY, response.data.token);
    router.go(REDIRECT_URL_AFTER_LOGIN);
  })
  .catch(function (error) {
    console.log(error) // FIXME: Only for debugging
  })
}

var router = new Router({
   mode: 'history',
});

export function logout() {
  clearAccessToken();
  router.go('/');
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isLoggedIn() {
  const accessToken = getAccessToken();
  return !!accessToken && !isTokenExpired(accessToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
