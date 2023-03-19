import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Col } from "reactstrap";
import "../../styles/car-item.css";
import * as vehiclesApi from "../../API/api-vehicles";

// Display information about user booking
const MyBooking = ({ reservationItem }) => {
  const { _id, reserve_from, status, vehicle } = reservationItem;
  const { picture_url, price_per_day, description } = vehicle || {};
  const dateFromString = new Date(reserve_from).toDateString();
  const dateToString = new Date().toDateString();
  const [visible, setVisible] = useState(status === "confirmed");

  const handleCompleteClick = async () => {
    vehiclesApi
      .updateReservationStatus(_id, "completed")
      .then(setVisible(false));
  };

  return (
    <Col lg="4" md="4" sm="6" className="md-5">
      <div className="car__item">
        <div className="car__img">
          <img
            src={picture_url ? picture_url : ""}
            alt="Car"
            className="w-100"
          />
        </div>
        <h6>Reference: {_id}</h6>
        <h6 className="">
          {description} {`$${price_per_day}.00`}
          <span> per day</span>
        </h6>
        <h6>Reserved from: {dateFromString}</h6>
        {!visible && <h6>Reserved to: {dateToString}</h6>}
        <h6>Status: {status}</h6>
        {visible && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Button
              type="complete"
              fullWidth
              onClick={handleCompleteClick}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: 150, height: 50 }}
            >
              Complete booking
            </Button>
          </Box>
        )}
      </div>
    </Col>
  );
};

export default MyBooking;
