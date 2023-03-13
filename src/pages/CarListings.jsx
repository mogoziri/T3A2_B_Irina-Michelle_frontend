import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import CarItem from '../components/UI/CarItem';

const CarListings = ({vehicles}) => {
  return (
    <Helmet title="Car Listings">
      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h6 className="section__subtitle"> Browse</h6>
                <h2 className="section__title"> Cars Available</h2>
            </Col>
            {
              vehicles.map((item) => (
                <CarItem carItem={item} key={item._id} /> /* don't want to show description or transmission here*/
              ))
            }
          </Row>
        </Container>
      </section>
      </Helmet>
  )
}

export default CarListings
