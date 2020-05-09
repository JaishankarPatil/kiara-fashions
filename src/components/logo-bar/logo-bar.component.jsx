import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/carticon.component";
import Logo from "../logo/logo.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selectors";

import { LogoContainer, BrandName, SignInButton } from "./logo-bar.styles";

const LogoBar = ({ hidden, history, currentUser }) => {
  console.log("LogoBar", currentUser);

  return (
    <LogoContainer>
      <Logo />
      <BrandName>kiara fashaions</BrandName>
      {currentUser ? (
        <SignInButton onClick={() => auth.signOut()}>SIGN OUT</SignInButton>
      ) : (
        <SignInButton onClick={() => history.push("/signin")}>
          SIGN IN
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

export default compose(withRouter, connect(mapStateToProps))(LogoBar);
