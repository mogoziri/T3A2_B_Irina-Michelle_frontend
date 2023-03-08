import React from "react";

import TopSlider from "../components/UI/TopSlider";
import Helmet from "../components/Helmet/Helmet";
import FindCarForm from "../components/UI/FindCarForm";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
    return (
    <Helmet title="Home">

    {/* Top Slider section  */}
        <section className="p-0 top__slider-section">
          <TopSlider />

          <div className="top_form">
            <Container>
              {/* <Row className="form__row">
                <Col lg='4' md='4'>
                   <div className="find__cars-left">
                    <h2>Search Cars</h2>
                    </div> 
                </Col> */}

                <Col lg='8' md='8' sm='12'>
                   <FindCarForm />
                </Col>
              {/* </Row> */}
            </Container> 
          </div>

        </section>
        </Helmet>
    );
};

export default Home