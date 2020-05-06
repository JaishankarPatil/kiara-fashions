import React from "react";
import { SignInSignUpContainer } from "./sign-in-and-sign-up.styles";

import SignIn from "../../signin/signin.component";
import SignUp from "../../signup/signup.component";

const SignInAndSignUp = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInAndSignUp;
