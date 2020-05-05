import React from "react";

import HeaderMain from "../../components/header-main/header-main.component";
import HeaderBottom from "../../components/header-bottom/header-bottom.component";

import { HeaderContainer } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <HeaderMain />
    <HeaderBottom />
  </HeaderContainer>
);

export default Header;
