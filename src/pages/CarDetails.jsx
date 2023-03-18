import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import * as vehiclesApi from "../API/api-vehicles";
import CarDetailedItem from "../components/UI/CarDetailedItem";

import { Container, Row, Col } from "reactstrap";

/* Needs to connect to Book Now Button on Car Listing Page*/
const CarDetails = () => {
  const [vehicle, setVehicle] = useState({});
  const [/*error*/ setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    vehiclesApi
      .getVehicle(id)
      .then((data) => {
        setVehicle(data);
      })
      .catch(() => {
        setError("There was an issue loading the Vehicles");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Helmet title="Car Details">
      {/* car offer section  */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Car Details</h2>
            </Col>
          </Row>
          <Row>
            <CarDetailedItem carItem={vehicle} key={vehicle._id} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
