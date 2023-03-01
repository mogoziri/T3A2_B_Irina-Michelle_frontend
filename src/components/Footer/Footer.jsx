import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';
// import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';

const quickLinks = [
  {
              path:"/home",
              display: "Home"
            },
            // {
            //   path:"/cars",
            //   display: "Car Details"
            // },
            {
              path:"/cars",
              display: "Car Listings"
            },
            // {
            //   path:"/cars",
            //   display: "Car Rating"
            // },
            {
              path:"/cars",
              display: "List My Car"
            },
            {
              path:"/log_in",
              display: "Log In"
            },
            // {
            //   path:"/bookings",
            //   display: "Owner Booking Ref"
            // },
            // {
            //   path:"/profile",
            //   display: "Owner Profile"
            // },
            // {
            //   path:"/profile: slug",
            //   display: "Rate User"
            // },
            {
              path:"/sign_up",
              display: "Sign Up"
            },
            // {
            //   path:"/bookings: slug",
            //   display: "User Booking Ref"
            // },
            // {
            //   path:"/profile: slug",
            //   display: "User Profile"
            // },
          
]

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
     <footer className="footer">
    <Container>
      <Row>
        <Col lg='2' md='4' sm='12' >
        <div className="logo footer__logo">
              <h1><Link to ='/home' className='d-flex align-items-center gap-1'>
              <i class="ri-roadster-fill"></i>
                <span>CARENTAL</span>
              </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              The new way to rent a car. 
            </p>
        </Col>

        <Col lg='4' md='4' sm='6'>
          <div className="md-4">
            <h5 className="footer__link-title"> Quick Links </h5>
            <ListGroup>
              {quickLinks.map((item,index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                  <Link to={item.path}>{item.display}
                  </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <div className="footer__bottom">
            <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
            <i className="ri-copyright-line"></i> Copyright {year}, by Carental.
            </p>
          </div>
        </Col>

      </Row>
    </Container>
  </footer>
)};

export default Footer