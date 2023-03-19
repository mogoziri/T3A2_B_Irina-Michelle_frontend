import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import CarListings from "../pages/CarListings";
import ListMyCar from "../pages/ListMyCar";
import LogIn from "../pages/LogIn";
import MyCars from "../pages/MyCars";
import MyBookings from "../pages/MyBookings";
import SignUp from "../pages/SignUp";
import UpdateCar from "../pages/UpdateCars";
import { useAuth } from "../Authentication/auth-provider";

//creates the routes for front end pages
const Routers = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/cars" element={<CarListings />} />
      <Route
        path="/list-my-car"
        element={isLoggedIn ? <ListMyCar /> : <SignUp />}
      />
      <Route
        path="/my-cars"
        element={isLoggedIn ? <MyCars /> : <Navigate replace to="/" />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate replace to="/" /> : <LogIn />}
      />
      <Route
        path="/bookings"
        element={isLoggedIn ? <MyBookings /> : <Navigate replace to="/" />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate replace to="/" /> : <SignUp />}
      />
      <Route
        path="/cars/update/:id"
        element={isLoggedIn ? <UpdateCar /> : <LogIn />}
      />
    </Routes>
  );
};

export default Routers;
