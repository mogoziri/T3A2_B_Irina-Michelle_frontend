import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Col } from "reactstrap";
import "../../styles/car-item.css";
import * as vehiclesApi from "../../API/api-vehicles";

const MyBooking = ({ reservationItem }) => {
  const { _id, reserve_from, status } = reservationItem;
  const dateFromString = new Date(reserve_from).toDateString();
  const dateToString = new Date().toDateString();
  const [visible, setVisible] = useState(status !== "completed");

  const handleCompleteClick = async () => {
    vehiclesApi
      .updateReservationStatus(_id, "completed")
      .then(setVisible(false));
  };

  return (
    <Col lg="4" md="4" sm="6" className="md-5">
      <div className="car__item">
        <h6>Reference: {_id}</h6>
        <h6>Reserved from: {dateFromString}</h6>
        {!visible && <h6>Reserved to: {dateToString}</h6>}
        <h6>Booking status: {status}</h6>
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
