import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import { Link, /*NavLink*/ } from "react-router-dom";
import '../../styles/header.css';
import { Button } from '@mui/material'
import { useAuth } from "../../Authentication/auth-provider";


// import UserLogIn from "../components/UI/UserLogIn";
// import SignUp from "../UI/SignUpForm";

// ToDo: Add later if needed
// const navLinks = [
//   {
//     path:"/home",
//     display: "Home"
//   },
//   {
//     path:"/cars",
//     display: "Car Details"
//   },
//   {
//     path:"/cars",
//     display: "Car Listings"
//   },
//   {
//     path:"/cars",
//     display: "Car Rating"
//   },
//   {
//     path:"/cars",
//     display: "List My Car"
//   },
//   {
//     path:"/log_in",
//     display: "Log In"
//   },
//   {
//     path:"/bookings",
//     display: "Owner Booking Ref"
//   },
//   {
//     path:"/profile",
//     display: "Owner Profile"
//   },
//   {
//     path:"/profile: slug",
//     display: "Rate User"
//   },
//   {
//     path:"/sign_up",
//     display: "Sign Up"
//   },
//   {
//     path:"/bookings: slug",
//     display: "User Booking Ref"
//   },
//   {
//     path:"/profile: slug",
//     display: "User Profile"
//   },
// ]

const Header = () => {
  const { logout, isLoggedIn } = useAuth();


  return <header className="header">
    {/* Header Top */}
    <div className="header_top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' >
          <div className="logo footer__logo">
              <h1><Link to ='/home' className='d-flex align-items-center gap-1'>
              <i className="ri-roadster-fill"></i>
                <span>CARENTAL</span>
              </Link>
              </h1>
            </div>

          {/* <div className="header__top__left d-flex">
            <Link to='/home' className=" d-flex align-items-center gap-1" >
              <span>CARENTAL</span></Link> */}
              {/* <span className="header_top_carental"></span> */}
            {/* </div> */}
          </Col>

          <Col lg='6' md='6' sm='6' >

          <div className="header__top__right d-flex align-items-center justify-content-end gap-2">
            <Link to='/SignUp' className=" d-flex align-items-center gap-1" >
            <i className="ri-user-line"></i> Sign Up </Link> 
            {/* link to Sign Up page */}

            <Link to='/ListMyCar'className=" d-flex align-items-center gap-1">
            <i className="ri-car-line"></i> List My Car </Link>
             {/* link to List My Car page */}

            <Link to='LogIn'className=" d-flex align-items-center gap-1"> 
            <i className="ri-login-box-line"></i> Log In </Link>
             {/* link to Log In page */}
          </div>

           {/* {isLoggedIn ? (
          //   <>
          //     <Tooltip title="Open userLinks">
          //       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          //         <Avatar
          //           alt={username}
          //           src={`https://avatars.dicebear.com/api/initials/:${username}.svg?chars=1`}
          //         />
          //       </IconButton>
          //     </Tooltip>
          //     <Menu
          //       sx={{ mt: "45px" }}
          //       id="menu-appbar"
          //       anchorEl={anchorElUser}
          //       anchorOrigin={{
          //         vertical: "top",
          //         horizontal: "right",
          //       }}
          //       keepMounted
          //       transformOrigin={{
          //         vertical: "top",
          //         horizontal: "right",
          //       }}
          //       open={Boolean(anchorElUser)}
          //       onClose={handleCloseUserMenu}
          //     >
          //       {userLinks.map(({ name, path }) => (
          //         <MenuItem
          //           href={path}
          //           key={name}
          //           onClick={handleCloseUserMenu}
          //         >
          //           <Typography textAlign="center">{name}</Typography>
          //         </MenuItem>
          //       ))}
          //     </Menu>
          //   </>
          // ) : (
          //   <>
          //     <Button href="/sign-in" color="inherit">
          //       Login
          //     </Button>
          //     <Button href="/sign-up" color="inherit">
          //       Sign Up
          //     </Button>
          //</>
          //   </>
          // )} */}
          <Button color="inherit" onClick={ () => logout()}>
                Logout
              </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </header>
};

export default Header