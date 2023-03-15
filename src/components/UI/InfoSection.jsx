import React from 'react';
import { Link } from "react-router-dom";
// import { Container, Row, Col} from "reactstrap";
import '../../styles/info-section.css';   
import { Box } from '@mui/material'

const InfoSection = () => {
  return (
    <section className='middle__home'>
        <Box>
            <div className='find__cars-left'></div>
        </Box>
        <Box className=" d-flex justify-content-center">
            <div className="info__section-content">
                <h4 className="section__subtitle">Carental is the new way to rent a car.</h4>
                <p className="section__blurb">We want to make car sharing simple to use, 
                cost-effective, and environmentally friendly.</p>
                <div className="info__section-item">
                    <p className="section-blurb">
                        <i className="ri-roadster-fill"></i> <Link className="quick__link" to="/CarListings"> Rent a Car</Link>
                    </p>
                </div>
                <div className="info__section-item">
                    <p className="section-blurb">
                        <i className="ri-roadster-line"></i> <Link className="quick__link" to="/list-my-car"> List My Car</Link>
                    </p>
                </div>
            </div>
        </Box>
  </section>
  )
}

export default InfoSection
