import React from "react";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/carticon.component";
import Logo from "../logo/logo.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { LogoContainer, BrandName } from "./logo-bar.styles";

const LogoBar = ({ hidden }) => {
  return (
    <LogoContainer>
      <Logo />
      <BrandName>kiara fashaions</BrandName>
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </LogoContainer>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(LogoBar);
