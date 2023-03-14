import { useState } from "react";
import { useNavigate, /*useLocation*/ } from "react-router-dom";
import * as vehiclesApi from "../API/api-vehicles"

const useVehicle = () => {
    const [ error, setError] = useState();
    const navigate = useNavigate() 

    const listVehicle = ({ description, transmission, owner_id, price_per_day, location, availability, picture_url }) => {
      // setLoading(true);
  
      vehiclesApi
        .listVehicle({ description, transmission, owner_id, price_per_day, location, availability, picture_url })
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          setError(error);    
        })
        // .finally(() => setLoading(false));
    };

    return {
      listVehicle, 
      error
    }
}


export default useVehicle;