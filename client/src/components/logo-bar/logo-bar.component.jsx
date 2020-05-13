import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/carticon.component";
import Logo from "../logo/logo.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { withRouter, Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { LogoContainer, BrandName, SignInButton } from "./logo-bar.styles";

const LogoBar = ({ hidden, history, currentUser, signOutStart }) => {
  console.log("LogoBar", currentUser);

  return (
    <LogoContainer>
      <Link to="/">
        <Logo />
      </Link>
      <BrandName>kiara fashaions</BrandName>
      {currentUser ? (
        <SignInButton onClick={() => signOutStart()}>
          <span>SIGN OUT</span>
        </SignInButton>
      ) : (
        <SignInButton onClick={() => history.push("/signin")}>
          <span>SIGN IN</span>
        </SignInButton>
      )}

      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </LogoContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LogoBar);
