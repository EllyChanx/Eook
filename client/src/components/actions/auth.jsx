import { USER_LOGGED_IN } from "./../../types";
import api from './../../api';

export const userLoggedIn = (user) => ({ // user from login
  type: USER_LOGGED_IN,
  user
}) 

export const login = (credentials) => dispatch => 
  api.user.login(credentials) // make api request and get data with axios
  .then(user => dispatch(userLoggedIn(user))); // dispatch redux action and change reducer that redux stored
