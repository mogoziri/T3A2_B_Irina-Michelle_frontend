import {
Box,
Button,
Container,
Alert,
Grid,
// Link,
TextField,
Typography,
} from "@mui/material";
import React, { useState } from "react";
//   import { Link as RouterLink } from "react-router-dom";
import useVehicle from "../../Hooks/useVehicleHook";
  
  const ListMyCarForm = () => {
    const { listVehicle, error } = useVehicle();
    const [type, setType] = useState("");
    const [owner_id, setOwnerId] = useState("");
    const [price_per_day, setPricePerDay] = useState("");
    const [location, setLocation] = useState("");
    const [availability, setAvailability] = useState("");
    const [features, setFeatures,] = useState("");
    const [picture_url, setPictureUrl,] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      listVehicle({ type, owner_id, price_per_day, location, availability, features, picture_url });
    };return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
          //   marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 43,
            marginTop: 10,
  }
          }
        >
          <Typography variant="h6">List My Car</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="type"
                  name="type"
                  autoComplete="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </Grid>
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price_per_day"
                  label="price_per_day"
                  type="price_per_day"
                  id="price_per_day"
                  autoComplete="price_per_day"
                  value={price_per_day}
                  onChange={(e) => setPricePerDay(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="location"
                  type="location"
                  id="location"
                  autoComplete="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="availability"
                  label="availability"
                  type="availability"
                  id="availability"
                  autoComplete="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="features"
                  label="features"
                  type="features"
                  id="features"
                  autoComplete="features"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="picture_url"
                  label="picture_url"
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
              sx={{ mt: 3, mb: 2 }}
            >
              List Car
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default ListMyCarForm;
  