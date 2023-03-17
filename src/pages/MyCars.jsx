import React, { useState, useEffect } from "react";
import { useAuth } from "../Authentication/auth-provider";
import * as vehiclesApi from "../API/api-vehicles"
import MyCar from "../components/UI/MyCar"
import MyReservation from "../components/UI/MyReservation"

import { Container, Row } from "reactstrap";



const MyCars = () => { 
    const { userId } = useAuth();
    const [ vehicles, setVehicles ] = useState([])
    const [ reservations, setReservations ] = useState([])
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

    useEffect(() => {
      vehiclesApi
        .getOwnerReservations(userId)
        .then(( data ) => {
          setReservations(data);
        })
        .catch(() => {
          setError("There was an issue loading the Reservations");
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section>
        <Container>
          <Row>
        <h1 style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 50,
        }} >My cars</h1>
        {
              vehicles.map((item) => (
                <MyCar carItem={item} key={item._id} /> 
              ))
            }
            </Row>
            <Row>
        <h1 style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 30,
        }} >Reservations</h1>
        {
          reservations.filter((item) => (item.status === "created")).map((item) => (
            <MyReservation carItem={vehicles.find((vehicle) => vehicle._id === item.vehicle_id)} reservationItem={item} /> 
          ))
        }
        </Row>
        </Container>
        </section>
    );
}

export default MyCars