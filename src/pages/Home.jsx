import React, { useEffect, useState } from "react";
import TopSlider from "../components/UI/TopSlider";
import Helmet from "../components/Helmet/Helmet";
import * as vehiclesApi from "../API/api-vehicles";
import InfoSection from "../components/UI/InfoSection";
import { Container, Col } from "reactstrap";
import CarListings from "./CarListings";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [/*error*/ setError] = useState("");

  useEffect(() => {
    vehiclesApi
      .getAllVehicles()
      .then((data) => {
        setVehicles(data);
      })
      .catch(() => {
        setError("There was an issue loading the Vehicles");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Helmet title="Home">
      {/* Top Slider section  */}
      <section className="p-0 top__slider-section">
        <TopSlider />
        <div className="top_form">
          <Container>
            <Col lg="8" md="8" sm="12">
              {/* <FindCarForm /> */}
            </Col>
          </Container>
        </div>
      </section>
      {/* Info section */}
      <section className="p-0 info__section">
        <InfoSection />
        <CarListings vehicles={vehicles} />
      </section>
    </Helmet>
  );
};

export default Home;
