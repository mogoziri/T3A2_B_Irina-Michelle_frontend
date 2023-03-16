import React from "react";
import { Col }  from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/car-item.css';

const MyBooking = ({ reservationItem } ) => {
  const { _id, reserve_from, status } = reservationItem
  
  return <Col lg='4' md='4' sm='6' className='md-5'>
        <div className="car__item">
            <h6>{reserve_from}</h6>
            <h6>{status}</h6>
         </div>
         </Col>
}


export default MyBooking