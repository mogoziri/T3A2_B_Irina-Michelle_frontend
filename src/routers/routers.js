import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import CarListings from "../pages/CarListings";
import CarRatings from "../pages/CarRatings";
import ListMyCar from "../pages/ListMyCar";
import LogIn from "../pages/LogIn";
import OwnerBooking from "../pages/OwnerBookingref";
import OwnerProfile from "../pages/OwnerProfile";
import RateUser from "../pages/RateUser";
import SignUp from "../pages/SignUp";
import UserBooking from "../pages/UserBookingref";
import UserProfile from "../pages/UserProfile";



const Routers = () => {
    return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' elements={<home/>} />
    <Route path='/cars/:slug' elements={<CarDetails/>} />
    <Route path='/cars' elements={<CarListings/>} />
    <Route path='/cars' elements={<CarRatings/>} />
    <Route path='/cars' elements={<ListMyCar/>} />
    <Route path='/login' elements={<LogIn/>} />
    <Route path='/bookings' elements={<OwnerBooking/>} />
    <Route path='/profile' elements={<OwnerProfile/>} />
    <Route path='/profile' elements={<RateUser/>} />
    <Route path='/signup' elements={<SignUp/>} />
    <Route path='/bookings' elements={<UserBooking/>} />
    <Route path='/profile' elements={<UserProfile/>} />
    </Routes>
}

export default Routers