import React from "react";
import { Link } from "react-router-dom";
import "../../styles/info-section.css";
import { Box } from "@mui/material";

//this is the info section on the home page. Prompts fot the user to sign up or log in if they want to rent a car or list their car/s.
const InfoSection = () => {
  return (
    <section className="middle__home">
      <Box>
        <div className="find__cars-left"></div>
      </Box>
      <Box className=" d-flex justify-content-center">
        <div className="info__section-content">
          <h4 className="section__subtitle">
            Carental is the new way to rent a car.
          </h4>
          <p className="section__blurb">
            We want to make car sharing simple to use, cost-effective, and
            environmentally friendly.
          </p>
          <div className="info__section-item">
            <p className="section-blurb">
              <i className="ri-roadster-fill"></i>{" "}
              <Link className="quick__link" to="/signup">
                {" "}
                Rent a Car
              </Link>
            </p>
          </div>
          <div className="info__section-item">
            <p className="section-blurb">
              <i className="ri-roadster-line"></i>{" "}
              <Link className="quick__link" to="/list-my-car">
                {" "}
                List My Car
              </Link>
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default InfoSection;
