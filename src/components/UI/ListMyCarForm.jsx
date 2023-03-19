import { Box, Button, Container, Alert, Grid, TextField } from "@mui/material";
import "remixicon/fonts/remixicon.css";
import "../../styles/info-section.css";
import img10 from "../../Assets/all-images/cars-img/Toyota.png";
import React, { useState } from "react";
import { useVehicle } from "../../Hooks/useVehicleHook";
import { useAuth } from "../../Authentication/auth-provider";

//List My Car form. User must be logged in to access this component.
const ListMyCarForm = () => {
  const { listVehicle, error } = useVehicle();
  const { userId } = useAuth();
  const [price_per_day, setPricePerDay] = useState("");
  const [location, setLocation] = useState("");
  const [transmission, setTransmission] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    listVehicle({
      description,
      transmission,
      price_per_day: parseInt(price_per_day),
      location,
      availability: true,
      picture_url,
      owner_id: userId,
    });
  };

  //User to fill in the fields of the form and select save car button to add car to DB/ website (All fields are required to list a car)
  return (
    <Container component="main" maxWidth="xs">
      <img src={img10} alt="Toyota" className="w-100 mt-20px" />
      <Box
        sx={{
          marginBottom: 45,
          marginTop: 10,
        }}
      >
        <h2>List My Car</h2>
        <p>
          Have your car up on the Carental website instantly. List your car
          here:
        </p>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} paddingBottom="20px">
              <i className="ri-roadster-line"></i>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} paddingBottom="20px">
              <i className="ri-settings-5-line"></i>
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
            <span>
              <i className="ri-map-pin-2-line"></i>
            </span>
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

          <Button
            type="register"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, width: 150, height: 50 }}
          >
            Save Car
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ListMyCarForm;
