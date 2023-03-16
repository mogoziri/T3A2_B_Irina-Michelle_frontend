import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import axios from "axios"; // eslint-disable-line no-unused-vars

const mockSignUp = jest.fn();
let mockErrorMessage = "";

jest.mock("axios", () => jest.fn(() => Promise.resolve()));
jest.mock("../../Authentication/auth-provider", () => ({
  useAuth: () => ({
    signUp: mockSignUp,
    error: mockErrorMessage,
  }),
}));

describe("SignUpForm", () => {
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    render(<SignUpForm />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole("button")).toHaveTextContent("Register");
    expect(screen.getByRole("heading")).toHaveTextContent("Sign Up");
    expect(
      screen.getByText("Already have an account? Login")
    ).toBeInTheDocument();
  });

  it("submits username and password when button is pressed", () => {
    render(<SignUpForm />, {
      wrapper: BrowserRouter,
    });

    const usernameEl = screen.getByLabelText("Username *");
    const passwordEl = screen.getByLabelText("Password *");
    const submitButton = screen.getByRole("button");

    userEvent.type(usernameEl, "testusername");
    userEvent.type(passwordEl, "testpassword");
    userEvent.click(submitButton);

    expect(mockSignUp).toHaveBeenCalledWith({
      displayName: "testusername",
      username: "testusername",
      password: "testpassword",
    });
  });

  it("renders Error message", () => {
    mockErrorMessage = "User already exists";
    render(<SignUpForm />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
  });
});