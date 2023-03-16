import { Box, Button } from "@mui/material"
import React, { useState } from "react";
import Modal from "react-modal";
import { Col }  from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/car-item.css';
import { useAuth } from "../../Authentication/auth-provider";
import * as vehiclesApi from "../../API/api-vehicles"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const CarDetailedItem = ({ carItem } ) => {  
  const { userId } = useAuth();
  const {_id, transmission, picture_url, location, price_per_day, description, owner_id} = carItem
  const [visible, setVisible] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleBookingClick = async () => {
    console.log(owner_id)
    setVisible(false)
    setIsOpen(true)
    await vehiclesApi.createReservation(_id, userId)
  };

  function closeModal() {
    setIsOpen(false);
  }


  return <Col lg='12' className='md-5'>

    <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >    
      <h2>Thanks! Your booking is being processed</h2>
      <button onClick={closeModal}>close</button>
    </Modal>  
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
                <span className=" d-flex align-items-center gap-1"><i className="ri-file-list-line"></i>{description}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-map-pin-2-line"></i>{location}</span>
                    <span className=" d-flex align-items-center gap-1"><i className="ri-settings-5-line"></i>{transmission}</span>
                </div>
                {/* <div style={{ display: "flex" }}> */}
                <Box sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 5,

        }}>
                 {visible && <Button type="confirm"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, mr: 5, width: 150, height: 50}} className="car__item-btn car__btn-rent" onClick={handleBookingClick}>
                    Confirm booking
                 </Button>}

                 <Button type="back"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, width: 150, height: 50}} className="car__item-btn car__btn-rent">
                    <Link to={`/`}>Back to search</Link>
                 </Button>
                 </Box>
                 {/* </div> */}
                </div>
            </div> 
         </Col>  
}

export default CarDetailedItem