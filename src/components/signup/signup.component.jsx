import React from "react";
import { connect } from "react-redux";

import { SignUpContainer, SignUpWith, SignUpHeader } from "./signup.styles";
import CustomButtonfrom from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { signUPStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handelSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUPStart } = this.props;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password's are not Matching");
      return;
    }
    signUPStart({ email, password, displayName });
  };

  changeHandler = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <SignUpContainer>
        <SignUpHeader>I do not have an account</SignUpHeader>
        <SignUpWith>Sign up with your Email and Password</SignUpWith>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            label="Display Name"
            onChange={this.changeHandler}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            onChange={this.changeHandler}
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            label="Password"
            onChange={this.changeHandler}
            required
            type="password"
          />
          <FormInput
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            onChange={this.changeHandler}
            required
            type="password"
          />
          <CustomButtonfrom type="submit"> SIGN UP </CustomButtonfrom>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUPStart: (userCredntial) => dispatch(signUPStart(userCredntial)),
});

export default connect(null, mapDispatchToProps)(SignUp);
