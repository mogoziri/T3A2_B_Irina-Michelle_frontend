import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

export const getCurrentUser = async () => {
  const token = localStorage.getItem("user-token");

  if (token) {
    const response = await axios.post(`${BASE_URL}/users/profile`, {token});
    const { _id } = response.data;

    return { isValid: true, userId: _id };
  }

  return { isValid: false };
};

export const signUp = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/users/register`, {
    username,
    password,
  });
  const { id } = jwt_decode(response.data);

  return { id, token: response.data };
};

export const logIn = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    username,
    password,
  });
  const { id } = jwt_decode(response.data);
  
  return { id, token: response.data };
};