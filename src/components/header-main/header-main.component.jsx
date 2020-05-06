import React from "react";

import { HeaderBackground } from "./header-main.styles";

import MenuItem from "../menu/menu.component";

import LogoBar from "../logo-bar/logo-bar.component";

const HeaderMain = ({ currentUser }) => {
  console.log("HeaderMain", currentUser);
  return (
    <HeaderBackground>
      <LogoBar currentUser={currentUser} />
      <MenuItem />
    </HeaderBackground>
  );
};

export default HeaderMain;
