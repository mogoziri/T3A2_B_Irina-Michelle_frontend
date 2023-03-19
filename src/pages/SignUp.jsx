import React from "react";
import SignUpForm from "../components/UI/SignUpForm";

//Sign up page
const SignUp = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUpForm />
    </div>
  );
};

export default SignUp;
