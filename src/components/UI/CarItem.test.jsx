import React from "react";
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CarItem from './CarItem'

const carData = {
    _id: "id",
    transmission: "auto",
    picture_url: "https://car.com",
    location: "Sydney",
    price_per_day: 120,
    description: "Jeep",
}

describe("CarItem", () => { 
    it("renders", () => {
        render(<BrowserRouter><CarItem carItem={carData}/></BrowserRouter>);
    });

    it("displays the car data", () => {
        render(<BrowserRouter><CarItem carItem={carData}/></BrowserRouter>);
        
        expect(screen.getByText("$120.00")).toBeInTheDocument()
        expect(screen.getByText("per day")).toBeInTheDocument()
        expect(screen.getByText("Jeep")).toBeInTheDocument()
        expect(screen.getByText("Sydney")).toBeInTheDocument()
        expect(screen.getByText("auto")).toBeInTheDocument()
        expect(screen.getByText("Book Now")).toBeInTheDocument()
    })
})