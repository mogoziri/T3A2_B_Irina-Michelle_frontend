import React from 'react';
import { Container, Row, Col} from "reactstrap";
import '../../styles/info-section.css';   
import { Link } from "react-router-dom";

const InfoSection = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='6' md='6'></Col>
                <div className="info__section-content">
                    <h4 className="section__subtitle">Carental is the new way to rent a car.</h4>
                    <p className="section__blurb">We want to make car sharing simple to use, 
                    cost-effective, and environmentally friendly.</p>

                    <div className="info__section-item d-flex align-items-center">
                        <p className="section-blurb d-flex align-items-center gap-2">
                        <i class="ri-roadster-fill"></i> <Link className="quick__link" to="/CarListings"> Rent a Car</Link>
                        </p>
                    </div>

                    <div className="info__section-item d-flex align-items-center">
                        <p className="section-blurb d-flex align-items-center gap-2">
                        <i class="ri-roadster-line"></i> <Link className="quick__link" to="/ListMyCar"> List My Car</Link>
                        </p>
                    </div>
                </div>
            <Col lg='6' md='6'></Col>
        </Row>
    </Container>
  </section>
  
}

export default InfoSection

