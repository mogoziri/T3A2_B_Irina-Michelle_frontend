import { useState } from "react";
import { useNavigate, /*useLocation*/ } from "react-router-dom";
import * as vehiclesApi from "../API/api-vehicles"

export const useVehicle = () => {
  const [ error, setError] = useState();
  const navigate = useNavigate() 

  const listVehicle = ({ description, transmission, owner_id, price_per_day, location, availability, picture_url }) => {

    vehiclesApi
      .listVehicle({ description, transmission, owner_id, price_per_day, location, availability, picture_url })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        setError(error);    
      })
  };

  const updateVehicle = ({ description, transmission, vehicle_id, owner_id, price_per_day, location, availability, picture_url }) => {
    vehiclesApi
    .updateVehicle({ description, transmission, owner_id, vehicle_id, price_per_day, location, availability, picture_url })
    .then(() => {
      navigate(`/cars/${vehicle_id}`); 
    })
    .catch((error) => {
      setError(error);    
    })
  };

  return {
    listVehicle, 
    updateVehicle,
    error
  }
}
