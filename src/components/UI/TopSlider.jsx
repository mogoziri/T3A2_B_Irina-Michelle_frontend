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
            <h1 className="top_slider_subtitle text-light mb-3 mt-5">Browse Cars Below....</h1>
            {/* <h4 className="top_slider_title text-light mb-4 mt-15">Carental</h4> */}
            {/* <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
            </button> */}
          </div>
        </Container>
    </div>

    <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
          <h1 className="top_slider_subtitle text-light mb-3 mt-5">Browse Cars Below....</h1>
          {/* <h4 className="text-light mb-3 mt-5"> Browse Cars Below ...</h4>
            <h1 className="text-light mb-4"> BOOK NOW!</h1> */}
            
            {/* <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
            </button> */}
          </div>
        </Container>
    </div>

    <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
          <h1 className="top_slider_subtitle text-light mb-3 mt-5">Browse Cars Below....</h1>
          {/* <h4 className="text-light mb-3 mt-5"> Browse Cars Below ...</h4>
            <h1 className="text-light mb-4"> BOOK NOW!</h1> */}
            
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