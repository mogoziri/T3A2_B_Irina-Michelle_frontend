import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import CarListings from "../pages/CarListings";
import CarRatings from "../pages/CarRating";
import ListMyCar from "../pages/ListMyCar";
import LogIn from "../pages/LogIn";
import OwnerBooking from "../pages/OwnerBookingref";
import Profile from "../pages/Profile";
import RateUser from "../pages/RateUser";
import SignUp from "../pages/SignUp";
import UserBooking from "../pages/UserBookingRef";
import { useAuth } from "../Authentication/auth-provider";

const Routers = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/cars" element={<CarListings />} />
        <Route path="/cars/:slug" element={<CarRatings />} />
        <Route path="/list-my-car" element={<ListMyCar />} />
        <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <LogIn />} /> {/*element={<LogIn />}*/}
        <Route path="/bookings" element={<OwnerBooking />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate replace to="/" />} /> {/*element={<OwnerProfile />}*/}
        <Route path="/profile/:slug" element={<RateUser />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate replace to="/" /> : <SignUp />}  /> {/*element={<SignUp />*/}
        <Route path="/bookings/:slug" element={<UserBooking />} />
        {/* <Route path="/profile/:slug" element={<UserProfile />} /> */}
        </Routes>
    );
};

export default Routers