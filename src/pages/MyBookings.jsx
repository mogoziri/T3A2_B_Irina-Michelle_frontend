import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { useAuth } from "../Authentication/auth-provider";
import * as vehiclesApi from "../API/api-vehicles"
import MyBooking from "../components/UI/MyBooking"


const MyBookings = () => { 
    const { userId } = useAuth();
    const [ reservations, setReservations ] = useState([])
    const [ /*error*/ setError ] = useState("")

    useEffect(() => {
        vehiclesApi
          .getRenterReservations(userId)
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
            marginBottom: 20,
            marginTop: 30,
        }} >My bookings</h1>
        {
          reservations.filter((item) => (item.status === "created")).map((item) => (
            <MyBooking reservationItem={item} /> 
          ))
        }
        </Row>
        </Container>
        </section>
    );      
}

export default MyBookings