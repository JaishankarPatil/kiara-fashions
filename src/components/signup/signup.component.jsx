import React from "react";

import { SignUpContainer, SignUpWith, SignUpHeader } from "./signup.styles";
import CustomButtonfrom from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

    if (password !== confirmPassword) {
      alert("Password and Confirm Password's are not Matching");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
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

export default SignUp;
