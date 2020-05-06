import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithPopup, auth } from "../../firebase/firebase.utils";
import { SignInContainer, SignInHeader, SignInWith } from "./signin.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = async (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  changeHandler = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInContainer>
        <SignInHeader>I already have an account</SignInHeader>
        <SignInWith>Sign in with your Email and Password </SignInWith>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            name="email"
            type="email"
            changeHandler={this.changeHandler}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            changeHandler={this.changeHandler}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={signInWithPopup}>
            {" "}
            Sign In With Google
          </CustomButton>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
