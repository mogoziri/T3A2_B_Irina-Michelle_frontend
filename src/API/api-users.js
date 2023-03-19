import axios from "axios";
import jwt_decode from "jwt-decode";

//set up URL env for development and production
const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

//get current user with token
export const getCurrentUser = async () => {
  const token = localStorage.getItem("user-token");
  // set up authorization with a bearer token
  if (token) {
    const response = await axios.get(`${BASE_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { _id } = response.data;
    //if the user is in the DB return userID
    return { isValid: true, userId: _id };
  }
  //otherwise return false (error message is sent)
  return { isValid: false };
};

//signup with a username and password.
export const signUp = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/users/register`, {
    username,
    password,
  });
  const { id } = jwt_decode(response.data); //decode JWT to receive the id associated with the user.

  return { id, token: response.data }; //user has now signed up and can now access bookings and add cars to database.
};

//login with a username and password.
export const logIn = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    username,
    password,
  });
  const { id } = jwt_decode(response.data); //decode JWT to receive the id associated with the user.

  return { id, token: response.data }; //user is logged in and can now access bookings and add cars to database.
};
