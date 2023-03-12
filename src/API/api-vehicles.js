import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

export const listVehicle = async ({ type, owner_id, price_per_day, location, availability, features, picture_url }) => {
    // console.log({BASE_URL, type, owner_id, price_per_day, location, availability, features, picture_url }) 
    console.log("list Vehicle called")
    const response = await axios.post(`${BASE_URL}/vehicles`, { /*from server.js file BE*/
      type,
      owner_id,
      price_per_day,
      location, 
      availability, 
      features, 
      picture_url,
    });
    console.log({response})
    return response.data;
  };