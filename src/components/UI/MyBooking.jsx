import React from "react";
import { Box, Button } from "@mui/material"
import { Col }  from "reactstrap";
import '../../styles/car-item.css';

const MyBooking = ({ reservationItem } ) => {
  const { reserve_from, status } = reservationItem
  
  return <Col lg='4' md='4' sm='6' className='md-5'>
        <div className="car__item">
            <h6>Reserve from: {reserve_from}</h6>
            <h6>Booking status: {status}</h6>
            <Box sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 5,
        marginTop: 5,

        }}>
            <Button type="complete"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, width: 150, height: 50}}>
            Complete booking
            </Button>
            </Box>
         </div>

         </Col>
}


export default MyBooking