
import React from "react";
import { Col }  from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/car-item.css';


const CarItem = (props) => {
const {imgUrl, type, model, rating, location, price_per_day, transmission, description} = props.CarItem
  return <Col lg='4' md='4' sm='6' className='md-5'>
        <div className="car__item">
            <div className="car__img">
                <img src={imgUrl} alt="Car" className='w-100'/>
            </div>
            
                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{type}</h4>
                    <h6 className="rent__price text-center">${price_per_day}.00
                    <span>/ Day</span></h6>

                <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mt-4">
                    <span className=" d-flex align-items-center gap-1"><i class="ri-roadster-line"></i>{model}</span>
                    <span className=" d-flex align-items-center gap-1"><i class="ri-star-line"></i>{rating}</span>
                    <span className=" d-flex align-items-center gap-1"><i class="ri-map-pin-2-line"></i>{location}</span>
                    <span className=" d-flex align-items-center gap-1"><i class="ri-settings-5-line"></i>{transmission}</span>
                    <span className=" d-flex align-items-center gap-1"><i class="ri-file-list-line"></i>{description}</span>
                </div>
                 <button className=" w-50 car__item-btn car__btn-rent">
                    <Link to={`/cars/${type}`} >Book Now</Link>
                    </button>

                    {/* <button className=" w-50 car__item-btn car__btn-details">
                    <Link to={`/cars/${type}`} >Car Details</Link>
                    </button> */}
                </div>
            </div> 
  </Col>
}


export default CarItem