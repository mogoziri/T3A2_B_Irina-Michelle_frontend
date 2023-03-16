import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import { Link, /*NavLink*/ } from "react-router-dom";
import '../../styles/header.css';
import { Button, Box } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authentication/auth-provider";

const Header = () => {

  const { logout, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const username = user ? user.displayName : null;
  const uid = user ? user.uid : null;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userLinks = [
    { name: "My bookings", path: `/bookings` },
    { name: "My cars", path: `/my-cars` },
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
          <div className="logo">
              <h1><Link to ='/' className='d-flex align-items-center gap-1'>
              <i className="ri-roadster-fill"></i>
                <span>CARENTAL</span>
              </Link>
              </h1>
            </div>
          </Col>

          <Col lg='6' md='6' sm='6' >

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
                  <Box display="flex" justifyContent="end">
                  <Button href="/list-my-car" color="inherit" >
                      <i className="ri-car-line"></i> List My Car {/* link to List My Car page */}
                  </Button>
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
                      sx={{ mt: "45px"}}
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
                  </Box>
                ) : (
                  <Box display="flex" justifyContent="end">
                     {/* <div className="header__top__right"></div> */}
                      <Button href="/signup" color="inherit" /*className=' d-flex align-items-right gap-1'*/>
                      <i className="ri-user-line"></i>Sign Up {/* link to Sign Up page */}
                      </Button>
                      <Button href={ isLoggedIn ? "/list-my-car" : "/signup" } color="inherit" /*className=' d-flex align-items-right gap-1'*/>
                      <i className="ri-car-line"></i> List My Car {/* link to List My Car page */}
                      </Button>
                      <Button href="/login" color="inherit" /*className=' d-flex align-items-right gap-1'*/>
                      <i className="ri-login-box-line"></i>Login {/* link to Log In page */}
                      </Button>
                      {/* <Button color="inherit" onClick={ () => logout()}>
                      <i className="ri-logout-circle-r-line"></i>Logout
                      </Button> */}
                  </Box>
                )} 
          </Col>
        </Row>
      </Container>
    </div>
  </header>
};

export default Header