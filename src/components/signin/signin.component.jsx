import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInContainer, SignInHeader, SignInWith } from "./signin.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { auth } from "../../firebase/firebase.utils";

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
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };
  changeHandler = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
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
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            {" "}
            Sign In With Google
          </CustomButton>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
