import React from 'react';

import Slider from 'react-slick';
import { Container } from 'reactstrap';
// import { Link } from 'react-router-dom';

import '../../styles/top-slider.css';

const TopSlider = () => {

    const settings = {
        fade: true,
        speed: 2000,
        autoplayspeed: 3000,
        infinite: true,
        autoplay: true,
        slidersToShow: 1,
        sliderToScroll: 1,
        pauseOnHover: false,
    }
  return (
  <Slider { ...settings} className="top__slider">
    <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3"> Rent My Car for $800 Per Day</h4> */}
            {/* <h1 className="text-light mb-4"> Reserve me Now</h1> */}
            {/* <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
            </button> */}
          </div>
        </Container>
    </div>

    <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3"> Rent My Car for $1200 Per Day</h4> */}
            {/* <h1 className="text-light mb-4"> Reserve me Now</h1> */}
            
            {/* <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
            </button> */}
          </div>
        </Container>
    </div>

    <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3"> Rent My Car for $120 Per Day</h4> */}
            {/* <h1 className="text-light mb-4"> Reserve me Now</h1> */}
            
            {/* <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
            </button> */}
          </div>
        </Container>
    </div>
  </Slider>
  );
};

export default TopSlider