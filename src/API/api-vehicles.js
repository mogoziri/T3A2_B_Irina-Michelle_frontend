import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

export const listVehicle = async ({ description, transmission, owner_id, price_per_day, location, availability, picture_url }) => {
  const token = localStorage.getItem("user-token");
  const response = await axios.post(`${BASE_URL}/vehicles`, { /*from server.js file BE*/
    description,  
    transmission,
    owner_id,
    price_per_day,
    location, 
    availability,  
    picture_url,
    token,
  });
  console.log(response)

  return response.data;
};

export const getVehicle = async (id) => {
  console.log(id)
  const response = await axios.get(`${BASE_URL}/vehicles/${id}`);
  console.log(response)
  return response.data;
}

export const getAllVehicles = async () => {
  const response = await axios.get(`${BASE_URL}/vehicles`);
  
  return response.data;
}