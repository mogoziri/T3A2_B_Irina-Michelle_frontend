
import React from "react";
import { Col }  from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/car-item.css';

const CarDetailedItem = ({ carItem } ) => {
  const {_id, transmission, picture_url, location, price_per_day, description} = carItem

  return <Col lg='12' className='md-5'>
        <div className="car__item">
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} className="car__img">
                <img src={picture_url ? picture_url : "" } alt="Car" className='w-50'/>
            </div>
            
                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{description}</h4> 
                    <h6 className="rent__price text-center gap-1">{`${price_per_day}.00`}
                    <span>/ Day</span></h6>

                <div className="car__item-info">
                    <span><i className="ri-file-list-line"></i>{description}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-map-pin-2-line"></i>{location}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-settings-5-line"></i>{transmission}</span>
                </div>
                <div style={{ display: "flex" }}>
                 <button style={{marginRight: "auto" }} className=" w-25 car__item-btn car__btn-rent">
                    <Link to={`/reserve/${_id}`}>Confirm booking</Link>
                 </button>
                 <button style={{marginLeft: "auto" }} className=" w-25 car__item-btn car__btn-rent">
                    <Link to={`/`}>Back to search</Link>
                 </button>
                 </div>
                </div>
            </div> 
         </Col>  
}

export default CarDetailedItem