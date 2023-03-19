import { useState } from "react";
import { useNavigate /*useLocation*/ } from "react-router-dom";
import * as vehiclesApi from "../API/api-vehicles";

//call to server to use Vehicle
export const useVehicle = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  //if successful in listing a Vehicle navigate home otherwise send error message.
  const listVehicle = ({
    description,
    transmission,
    owner_id,
    price_per_day,
    location,
    availability,
    picture_url,
  }) => {
    vehiclesApi
      .listVehicle({
        description,
        transmission,
        owner_id,
        price_per_day,
        location,
        availability,
        picture_url,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

    //retrieve vehicle by vehicle_id, if successful update a Vehicle navigate home otherwise send error message. 
  const updateVehicle = ({
    description,
    transmission,
    vehicle_id,
    owner_id,
    price_per_day,
    location,
    availability,
    picture_url,
  }) => {
    vehiclesApi
      .updateVehicle({
        description,
        transmission,
        owner_id,
        vehicle_id,
        price_per_day,
        location,
        availability,
        picture_url,
      })
      .then(() => {
        navigate(`/cars/${vehicle_id}`);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    listVehicle,
    updateVehicle,
    error,
  };
};
