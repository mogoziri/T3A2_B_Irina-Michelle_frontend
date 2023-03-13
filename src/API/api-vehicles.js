import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

export const listVehicle = async ({ transmission, owner_id, price_per_day, location, availability, picture_url }) => {
    const response = await axios.post(`${BASE_URL}/vehicles`, { /*from server.js file BE*/
      transmission,
      owner_id,
      price_per_day,
      location, 
      availability,  
      picture_url,
    });
  
    return response.data;
  };

  export const getAllVehicles = async () => {
    const response = await axios.get(`${BASE_URL}/vehicles`);
    
    return response.data;
  }