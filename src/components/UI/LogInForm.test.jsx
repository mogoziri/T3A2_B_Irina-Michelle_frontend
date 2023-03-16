import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LogInForm from "./LogInForm";
import axios from "axios"; // eslint-disable-line no-unused-vars

const mockLogIn = jest.fn();
let mockErrorMessage = "";

jest.mock("axios", () => jest.fn(() => Promise.resolve()));
jest.mock("../../Authentication/auth-provider", () => ({
  useAuth: () => ({
    logIn: mockLogIn,
    error: mockErrorMessage,
  }),
}));

describe("LogInForm", () => {
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    render(<LogInForm />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole("button")).toHaveTextContent("Submit");
    expect(screen.getByRole("heading")).toHaveTextContent("Welcome Back! Login Here");
    expect(
      screen.getByText("Or create a new account")
    ).toBeInTheDocument();
  });

  it("submits username and password when button is pressed", () => {
    render(<LogInForm />, {
      wrapper: BrowserRouter,
    });

    const usernameEl = screen.getByLabelText("Username *");
    const passwordEl = screen.getByLabelText("Password *");
    const submitButton = screen.getByRole("button");

    userEvent.type(usernameEl, "testusername");
    userEvent.type(passwordEl, "testpassword");
    userEvent.click(submitButton);

    expect(mockLogIn).toHaveBeenCalledWith({
      username: "testusername",
      password: "testpassword",
    });
  });

  it("renders Error message", () => {
    mockErrorMessage = "User doesn't exist";
    render(<LogInForm />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
  });
});