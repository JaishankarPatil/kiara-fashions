import React from "react";

import { CustomBtn } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomBtn {...props}>{children}</CustomBtn>
);

export default CustomButton;
