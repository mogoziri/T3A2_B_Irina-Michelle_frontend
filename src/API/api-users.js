import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

export const getCurrentUser = async () => {
  const user = JSON.parse(localStorage.getItem("user-token"));

  if (user) {
    // const { idToken, refreshToken } = user;
    const response = await axios.get(`${BASE_URL}/users/profile`, {
      withCredentials:true,
    });

    return response.data;
  }

  return { isValid: false };
};

export const signUp = async ({ username, password }) => {
  console.log({BASE_URL, username, password})
  const response = await axios.post(`${BASE_URL}/users/register`, {
    username,
    password,
  });
console.log({response})
  return response.data;
};

export const logIn = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    username,
    password,
  });

  return response.data;
};