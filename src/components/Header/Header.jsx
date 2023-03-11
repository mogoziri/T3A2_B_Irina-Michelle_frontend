import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import { Link, /*NavLink*/ } from "react-router-dom";
import '../../styles/header.css';
import { Button } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
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

  const { logout, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const username = user ? user.displayName : null;
  const uid = user ? user.uid : null;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userLinks = [
    { name: "Profile", path: `/users/profile/${uid}` },
    { name: "Logout" },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    const {
      target: { textContent },
    } = event;
    setAnchorElUser(null);

    if (textContent !== "Logout") {
      navigate(userLinks.find((link) => link.name === textContent)["path"]);
    } else {
      logout();
    }
  };

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
          </Col>

          <Col lg='6' md='6' sm='6'>

          {/* <div className="header__top__right d-flex align-items-center justify-content-end gap-2">
            <Link to='/SignUp' className=" d-flex align-items-center gap-1" >
            <i className="ri-user-line"></i> Sign Up </Link>  */}
            {/* link to Sign Up page */}

            {/* <Link to='/ListMyCar'className=" d-flex align-items-center gap-1">
            <i className="ri-car-line"></i> List My Car </Link> */}
             {/* link to List My Car page */}

            {/* <Link to='LogIn'className=" d-flex align-items-center gap-1"> 
            <i className="ri-login-box-line"></i> Log In </Link> */}
             {/* link to Log In page */}
          {/* </div> */}

           {isLoggedIn ? (
                  <>
                    <Tooltip title="Open userProfile"> 
                    {/* <Tooltip title="Open userLinks">  */}
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt={username}
                          src={`https://avatars.dicebear.com/api/initials/:${username}.svg?chars=1`}
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {userLinks.map(({ name, path }) => (
                        <MenuItem
                          href={path}
                          key={name}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography textAlign="center">{name}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <>
                    {/* <div className="header__top__right d-flex align-items-center justify-content-end gap-2"></div> */}
                      <Button href="/signup" color="inherit"/*className=' d-flex align-items-right gap-1'*/>
                      <i className="ri-user-line"></i>Sign Up {/* link to Sign Up page */}
                      </Button>
                      <Button href="/ListMyCar" color="inherit" /*className=' d-flex align-items-right gap-1'*/>
                      <i className="ri-car-line"></i> List My Car {/* link to List My Car page */}
                      </Button>
                      <Button href="/login" color="inherit" /*className=' d-flex align-items-right gap-1'*/>
                      <i className="ri-login-box-line"></i>Login {/* link to Log In page */}
                      </Button>
                      {/* <Button color="inherit" onClick={ () => logout()}>
                      <i className="ri-logout-circle-r-line"></i>Logout
                      </Button> */}
                  </>
                )} 
          </Col>
        </Row>
      </Container>
    </div>
  </header>
};

export default Header