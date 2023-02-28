import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import '../../styles/header.css';

const navLinks = [
  {
    path:"/home",
    display: "Home"
  },
  {
    path:"/cars",
    display: "Car Details"
  },
  {
    path:"/cars",
    display: "Car Listings"
  },
  {
    path:"/cars",
    display: "Car Rating"
  },
  {
    path:"/cars",
    display: "List My Car"
  },
  {
    path:"/log_in",
    display: "Log In"
  },
  {
    path:"/bookings",
    display: "Owner Booking Ref"
  },
  {
    path:"/profile",
    display: "Owner Profile"
  },
  {
    path:"/profile: slug",
    display: "Rate User"
  },
  {
    path:"/sign_up",
    display: "Sign Up"
  },
  {
    path:"/bookings: slug",
    display: "User Booking Ref"
  },
  {
    path:"/profile: slug",
    display: "User Profile"
  },
]

const Header = () => {
  return <header className="header">
    {/* Header Top */}
    <div className="header_top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' >
          <div className="header__top__left d-flex">
            <Link to='/home' className=" d-flex align-items-center gap-1" >
              <span>CARENTAL</span></Link>
              {/* <span className="header_top_carental"></span> */}
            </div>
          </Col>

          <Col lg='6' md='6' sm='6' >
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
            <Link to='#' className=" d-flex align-items-center gap-1" >
            <i class="ri-user-line"></i> Sign Up </Link>

            <Link to='#'className=" d-flex align-items-center gap-1">
            <i class="ri-car-line"></i> List My Car </Link>

            <Link to='#'className=" d-flex align-items-center gap-1"> 
            <i class="ri-login-box-line"></i> Log In </Link>
          </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* Middle of Header
    <div className="header__middle">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
            <div className="logo">
              <h1><Link to ='/home' className='d-flex align-items-center gap-1>
              <i class="ri-roadster-fill"></i>
                <span>CARENTAL<br/> Service </span>
              </Link></h1>
            </div>
          </Col>

           <Col lg='43 md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
            <span>
            <i className="ri-earth-line"></i>
            </span>
            <div className="header__location-content"
              <h4>NSW</h4>
              <h6>Sydney</h6> 
            </div>
            </div>
          </Col>

            *35mins in*
          <Col lg='2' md='3' sm='0' className=" d-flex align-items-center justify-content-end">
            <button className='header__btn btn>
              <Link to ='/contact'>
              <span><i class="ri-car-line"></i></span>
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div> */}

{/* main navigation*/}

      {/* <div className="main_navbar">
       <Container>
        <div className="navigation_wrapper d-flex align-items-center justify-content-between">
          <span className="mobile_menu">
          <i className="ri-menu-line"></i>
          </span> */}

        {/* <div className="navigate">
         <div className="menu">
         {navLinks.map((item, index) => (
                <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>{item.display}</NavLink>
              ))
            }
            </div>
          </div> */}

          {/* <div className="nav__right">
            <div className="search__box">
              <input type="text" placeholder="Search" />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div> */}
           
         {/* </div>
       </Container>
      </div> */}
  </header>
};

export default Header