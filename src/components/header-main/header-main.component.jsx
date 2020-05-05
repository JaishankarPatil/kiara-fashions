import React from "react";

import { HeaderBackground } from "./header-main.styles";

import MenuItem from "../menu/menu.component";

import LogoBar from "../logo-bar/logo-bar.component";

const HeaderMain = () => {
  return (
    <HeaderBackground>
      <LogoBar />
      <MenuItem />
    </HeaderBackground>
  );
};

export default HeaderMain;
