import React, { useState, useEffect } from "react";
import { useAuth } from "../Authentication/auth-provider";
import * as vehiclesApi from "../API/api-vehicles"
import MyCar from "../components/UI/MyCar"

const MyCars = () => { 
    const { userId } = useAuth();
    const [ vehicles, setVehicles ] = useState([])
    const [ /*error*/ setError ] = useState("")

    useEffect(() => {
        vehiclesApi
          .getVehiclesForOwner(userId)
          .then(( data ) => {
            setVehicles(data);
          })
          .catch(() => {
            setError("There was an issue loading the Vehicles");
          })
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section>
        <h1>My cars</h1>
        {
              vehicles.map((item) => (
                <MyCar carItem={item} key={item._id} /> 
              ))
            }
        <h1>Reservations</h1>
        </section>
    );
}

export default MyCars