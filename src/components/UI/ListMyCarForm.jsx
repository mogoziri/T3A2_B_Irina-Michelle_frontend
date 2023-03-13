import {
Box,
Button,
Container,
Alert,
Grid,
TextField,
Typography,
} from "@mui/material";
import 'remixicon/fonts/remixicon.css';
// import List-Img from '../../Assets/'

import React, { useState } from "react";
import useVehicle from "../../Hooks/useVehicleHook";
  
  const ListMyCarForm = () => {
    const { listVehicle, error } = useVehicle();
    const [price_per_day, setPricePerDay] = useState("");
    const [location, setLocation] = useState("");
    const [availability, setAvailability] = useState("");
    const [transmission, setTransmission,] = useState("");
    const [picture_url, setPictureUrl,] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      listVehicle({ transmission, price_per_day, location, availability, picture_url });
    };
    
    return (
      <Container component="main" maxWidth="xs" marginTop="16">
        <Box
          sx={{
            // flexDirection: "column",
            marginBottom: 45,
            marginTop: 10,
          }}
        >
          <Typography variant="h6">List My Car</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} 
            sx={{ 
            mt: 3,
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} paddingBottom="20px" >
              <i className="ri-roadster-line"></i>
                <TextField
                  required
                  fullWidth
                  id="transmission"
                  label="Transmission"
                  name="transmission"
                  autoComplete="transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                />
              </Grid>
            </Grid>
              <Grid item xs={12} paddingBottom="20px">
              <i className="ri-money-dollar-circle-line"></i>
                <TextField
                  required
                  fullWidth
                  name="price_per_day"
                  label="Price Per Day"
                  type="price_per_day"
                  id="price_per_day"
                  autoComplete="price_per_day"
                  value={price_per_day}
                  onChange={(e) => setPricePerDay(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} paddingBottom="20px">
              <span><i className="ri-map-pin-2-line"></i></span>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="Location"
                  type="location"
                  id="location"
                  autoComplete="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}  paddingBottom="20px">
              <i className="ri-calendar-2-line"></i>
                <TextField
                  required
                  fullWidth
                  name="availability"
                  label="Availability"
                  type="availability"
                  id="availability"
                  autoComplete="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} paddingBottom="20px">
              <i className="ri-image-line"></i>
                <TextField
                  required
                  fullWidth
                  name="picture_url"
                  label="Image URL"
                  type="picture_url"
                  id="picture_url"
                  autoComplete="picture_url"
                  value={picture_url}
                  onChange={(e) => setPictureUrl(e.target.value)}
                />
              </Grid>
              
            {!!error && <Alert severity="error">{error}</Alert>}
  
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/profile" component={RouterLink} variant="body2">
                  Already Listed This Car? Go To My Profile
                </Link>
              </Grid>
            </Grid> */}
  
            <Button
              type="register"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, width: 150, height: 50}}
            >
              Save Car
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default ListMyCarForm;
  