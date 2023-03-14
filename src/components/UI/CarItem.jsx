
import React from "react";
import { Col }  from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/car-item.css';

const CarItem = ({ carItem } ) => {
  const {_id, transmission, picture_url, rating, location, price_per_day, description} = carItem
  
  return <Col lg='4' md='4' sm='6' className='md-5'>
        <div className="car__item">
            <div className="car__img">
                <img src={picture_url ? picture_url : "" } alt="Car" className='w-100'/>
            </div>
            
                <div className="car__item-content mt-4">
                    {/* <h4 className="section__title text-center">{description}</h4> */}
                    <h6 className="rent__price text-center gap-1">{`${price_per_day}.00`}
                    <span>/ Day</span></h6>

                <div className="car__item-info">
                    <span className=" d-flex align-items-center gap-1"><i className="ri-file-list-line"></i>{description}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-star-line"></i>{rating}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-map-pin-2-line"></i>{location}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-settings-5-line"></i>{transmission}</span>
                </div>
                 <button className=" w-50 car__item-btn car__btn-rent">
                    <Link to={`/cars/${_id}`} >Book Now</Link>
                    </button>

                    {/* <button className=" w-50 car__item-btn car__btn-details">
                    <Link to={`/cars/${type}`} >Car Details</Link>
                    </button> */}
                </div>
            </div> 
         </Col>
}


export default CarItem