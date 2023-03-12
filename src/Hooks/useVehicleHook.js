import { useState } from "react";
import { useNavigate, /*useLocation*/ } from "react-router-dom";
import * as vehiclesApi from "../API/api-vehicles"

const useVehicle = () => {
    const [/*listVehicle,*/ setVehicle] = useState();
    const [/*user,*/ setUser] = useState();
    const [/*error,*/ setError] = useState();
    const [/*isLoggedIn,*/ setIsLoggedIn] = useState(false);
    const [/*loading,*/ setLoading] = useState(false);
    const [/*loadingInitial,*/ setLoadingInitial] = useState(true);
    console.log(useVehicle)
    const navigate = useNavigate() 

    const listVehicle = ({ type, owner_id, price_per_day, location, availability, features, picture_url }) => {
      // setLoading(true);
  
      vehiclesApi
        .listVehicle({ type, owner_id, price_per_day, location, availability, features, picture_url })
        .then((vehicle) => {
          console.log({vehicle});
          navigate('/');
        })
        .catch((error) => {
          // console.log({error})
          setError(error.response.data.data);    
        })
        .finally(() => setLoading(false));
    };

    return {
      listVehicle
    }
}


export default useVehicle;