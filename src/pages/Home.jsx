import React from "react";

import TopSlider from "../components/UI/TopSlider";
import Helmet from "../components/Helmet/Helmet";


import FindCarForm from "../components/UI/FindCarForm";
import InfoSection from "../components/UI/InfoSection";


import { Container, Col } from "reactstrap";

const Home = () => {
  return (
    <Helmet title="Home">
    {/* Top Slider section  */}
      <section className="p-0 top__slider-section">
        <TopSlider />
          <div className="top_form">
            <Container>
              <Col lg='8' md='8' sm='12'>
                  <FindCarForm />
              </Col>
            </Container> 
          </div>
      </section>
        {/* Info section */}
      <section className="p-0 info__section">
        <Container>
          <InfoSection />
        </Container>
      </section>
    </Helmet>
  );
};

export default Home