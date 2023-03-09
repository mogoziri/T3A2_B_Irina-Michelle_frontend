import React from "react";
import Helmet from "../components/Helmet/Helmet";

import carData from "../data/CarData";
import CarItem from '../components/UI/CarItem';

import { Container, Row, Col } from "reactstrap";

/* Needs to connect to Book Now Button on Car Listing Page*/ 
const CarDetails = () => {
    return (
    <Helmet title="Car Details">

        {/* car offer section  */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'className="text-center mb-5">
                        <h6 className="section__subtitle">Car Details</h6>
                        <h2 className="section__title">Car Info</h2>
                    </Col>

                    {
                        carData.map(item => (
                            <CarItem item={item} key={item.id} />
                        ))
                    }
                </Row>
            </Container>
        </section>

        </Helmet>
    );
};

export default CarDetails