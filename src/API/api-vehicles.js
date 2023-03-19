import axios from "axios";

//set up URL env for development and production
const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

//list a Vehicle
export const listVehicle = async ({
  description,
  transmission,
  owner_id,
  price_per_day,
  location,
  availability,
  picture_url,
}) => {
  const token = localStorage.getItem("user-token"); //get Item with user-token
  const response = await axios.post(
    `${BASE_URL}/vehicles`,
    {
      /*from server.js file BE*/
      description,
      transmission,
      owner_id,
      price_per_day,
      location,
      availability,
      picture_url,
    },
    { headers: { Authorization: `Bearer ${token}` } } //authorization required with a bearer token
  );

  return response.data;
};

//update a Vehicle
export const updateVehicle = async ({
  description,
  transmission,
  owner_id,
  vehicle_id,
  price_per_day,
  location,
  availability,
  picture_url,
}) => {
  const token = localStorage.getItem("user-token"); //get Item with user-token
  const response = await axios.put(
    `${BASE_URL}/vehicles/${vehicle_id}`,
    {
      /*from server.js file BE*/
      description,
      transmission,
      owner_id,
      price_per_day,
      location,
      availability,
      picture_url,
    },
    { headers: { Authorization: `Bearer ${token}` } } //user can update vehicle with authorization using bearer code
  );

  return response.data;
};

//Retrieve a Vehicle using vehicle ID
export const getVehicle = async (id) => {
  const response = await axios.get(`${BASE_URL}/vehicles/${id}`);

  return response.data;
};

//Retrieve all Vehicles
export const getAllVehicles = async () => {
  const response = await axios.get(`${BASE_URL}/vehicles`);

  return response.data;
};

//A user can retrieve all Vehicles that belong to them 'the owner' with the owner_id
export const getVehiclesForOwner = async (ownerId) => {
  const response = await axios.get(`${BASE_URL}/users/${ownerId}/vehicles`);

  return response.data;
};

//create a reservation on a vehicle with vehicle_id and user_token
export const createReservation = async (vehicle_id, renter_id) => {
  const token = localStorage.getItem("user-token");
  const response = await axios.post(
    `${BASE_URL}/vehicles/${vehicle_id}/reservation`,
    {
      reserveFrom: new Date().toJSON(),
      reserveTo: new Date().toJSON(),
    },
    { headers: { Authorization: `Bearer ${token}` } } //authorization required to reserve a vehicle
  );

  return response.data;
};

//Owner can accept or decline reservation by a user
export const updateReservationStatus = async (reservation_id, status) => {
  const token = localStorage.getItem("user-token");
  const response = await axios.put(
    `${BASE_URL}/vehicles/reservation/${reservation_id}`,
    {
      status: status,
    },
    { headers: { Authorization: `Bearer ${token}` } } //authorization required
  );

  return response.data;
};

//Retrieve owners reservations
export const getOwnerReservations = async (ownerId) => {
  const token = localStorage.getItem("user-token");
  const response = await axios.get(
    `${BASE_URL}/users/owner/${ownerId}/reservations`,
    { headers: { Authorization: `Bearer ${token}` } } //authorization required
  );

  return response.data;
};

//Retrieve renters reservations
export const getRenterReservations = async (renterId) => {
  const token = localStorage.getItem("user-token");
  const response = await axios.get(
    `${BASE_URL}/users/${renterId}/reservations`,
    { headers: { Authorization: `Bearer ${token}` } } //authorization required
  );

  return response.data;
};
