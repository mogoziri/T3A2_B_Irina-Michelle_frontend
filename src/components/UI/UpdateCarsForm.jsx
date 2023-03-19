import {
  Box,
  Button,
  Container,
  Alert,
  Grid,
  TextField,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import "remixicon/fonts/remixicon.css";
import "../../styles/info-section.css";
import React, { useEffect, useState } from "react";
import { useVehicle } from "../../Hooks/useVehicleHook";
import { useAuth } from "../../Authentication/auth-provider";
import { useParams } from "react-router-dom";
import * as vehiclesApi from "../../API/api-vehicles";

//This component allows the user to update any or all fields of a car already listed/ saved in the DB
const UpdateCarForm = () => {
  const { updateVehicle, error, setError } = useVehicle();
  const { id } = useParams(); /*added this*/
  const { userId } = useAuth();
  const [description, setDescription] = useState("");
  const [price_per_day, setPricePerDay] = useState("");
  const [location, setLocation] = useState("");
  const [transmission, setTransmission] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [availability, setAvailability] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const isValidForm = () => {
    const errors = {};
    let isValid = true;

    if (description.length === 0) {
      isValid = false;
      errors.description = "Description cannot be empty";
    }

    if (transmission.length === 0) {
      isValid = false;
      errors.transmission = "Transmission cannot be empty";
    }

    if (price_per_day.length === 0) {
      isValid = false;
      errors.price_per_day = "Price per day cannot be empty";
    }

    if (location.length === 0) {
      isValid = false;
      errors.location = "Location cannot be empty";
    }

    if (picture_url.length === 0) {
      isValid = false;
      errors.picture_url = "Picture URL cannot be empty";
    }

    setFormErrors(errors);
    return isValid;
  };

  //a particular vehicle is retrieved for updating with the vehicle_id
  useEffect(() => {
    vehiclesApi
      .getVehicle(id)
      .then((data) => {
        setDescription(data.description);
        setPricePerDay(data.price_per_day);
        setLocation(data.location);
        setTransmission(data.transmission);
        setPictureUrl(data.picture_url);
        setAvailability(data.availability);
      })
      .catch(() => {
        setError("There was an issue loading the Vehicles");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidForm()) {
      updateVehicle({
        description,
        transmission,
        vehicle_id: id,
        price_per_day: parseInt(price_per_day),
        location,
        availability: availability,
        picture_url,
        owner_id: userId,
      });
    }
  };

  const handleChange = (event) => {
    setAvailability(event.target.value === true ? true : false);
  };

  //All fields are required to be completed to update the vehicle details
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginBottom: 45,
          marginTop: 10,
        }}
      >
        <h2>UPDATE CAR</h2>
        <p>Edited your car details here:</p>
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
                error={!!formErrors.description}
                helperText={formErrors.description && formErrors.description}
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
                error={!!formErrors.transmission}
                helperText={formErrors.transmission && formErrors.transmission}
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
              error={!!formErrors.price_per_day}
              helperText={formErrors.price_per_day && formErrors.price_per_day}
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
              error={!!formErrors.location}
              helperText={formErrors.location && formErrors.location}
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
              error={!!formErrors.picture_url}
              helperText={formErrors.picture_url && formErrors.picture_url}
              name="picture_url"
              label="Image URL"
              type="picture_url"
              id="picture_url"
              autoComplete="picture_url"
              value={picture_url}
              onChange={(e) => setPictureUrl(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} paddingBottom="20px">
            <i className="ri-image-line"></i>
            <InputLabel id="demo-simple-select-label">Available</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={availability}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </Grid>

          {!!error && (
            <Alert severity="error">
              Unable to save car. Please check your input.
            </Alert>
          )}

          <Button
            type="register"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, mr: 5, width: 150, height: 50 }}
          >
            Update Car
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdateCarForm;
