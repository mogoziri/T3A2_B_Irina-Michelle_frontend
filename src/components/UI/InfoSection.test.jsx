import React from "react";
import InfoSection from "./InfoSection";
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

describe("InfoSection", () => { 
    it("renders", () => {
        render(<BrowserRouter><InfoSection/></BrowserRouter>);
    });

    it("displays the text content", () => {
        render(<BrowserRouter><InfoSection/></BrowserRouter>);
        
        expect(screen.getByText("Carental is the new way to rent a car.")).toBeInTheDocument()
        expect(screen.getByText("We want to make car sharing simple to use, cost-effective, and environmentally friendly.")).toBeInTheDocument()
        expect(screen.getByText("Rent a Car")).toBeInTheDocument()
        expect(screen.getByText("List My Car")).toBeInTheDocument()
    })
})