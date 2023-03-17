import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ListMyCarForm from "./ListMyCarForm";
import axios from "axios"; // eslint-disable-line no-unused-vars

const mockListMyCar = jest.fn();
// let mockErrorMessage = "";

jest.mock("axios", () => jest.fn(() => Promise.resolve()));
jest.mock("../../Authentication/auth-provider", () => ({
  useAuth: () => ({
    userId: "id", 
    // error: mockErrorMessage,
  }),
}));

jest.mock("../../API/api-vehicles", () => ({
  useVehicle: () => ({
    listVehicle: mockListMyCar, 
    // error: mockErrorMessage,
  }),
}));

describe("ListMyCarForm", () => {
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    render(<ListMyCarForm />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole("heading")).toHaveTextContent("List My Car");
    expect(
      screen.getByText("Have your car up on the Carental website instantly. List your car here:")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Save Car");
  });

  it("submits car details when button is pressed", () => {
    render(<ListMyCarForm />, {
      wrapper: BrowserRouter,
    });

    const descriptionEl = screen.getByLabelText("Description *");
    const transmissionEl = screen.getByLabelText("Transmission *");
    const price_per_dayEl = screen.getByLabelText("Price Per Day *");
    const locationEl = screen.getByLabelText("Location *");
    const picture_urlEl = screen.getByLabelText("Image URL *");
    const submitButton = screen.getByRole("button"); 

    userEvent.type(descriptionEl,"Jeep");
    userEvent.type(transmissionEl,"auto");
    userEvent.type(price_per_dayEl,"100");
    userEvent.type(locationEl,"Sydney");
    userEvent.type(picture_urlEl,"https://car.com");
    userEvent.click(submitButton);

    expect(mockListMyCar).toHaveBeenCalledWith({
        owner_id: "id",
        description: "Jeep",
        transmission: "auto",
        price_per_day: 120,
        location: "Sydney",
        picture_url: "https://car.com",
        availability: true,
    });
  });
});


//   it("renders Error message", () => {
//     mockErrorMessage = "User already exists";
//     render(<ListMyCarForm />, {
//       wrapper: BrowserRouter,
//     });

//     expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
//   });
// 