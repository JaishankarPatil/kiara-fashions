import React from "react";
import { FooterContainer } from "./footer.styles";
import CommonFooter from "../common-footer/commonfooter.component";
import DefaultFooter from "../default-footer/defaultfooter.component";

const Footer = () => (
  <FooterContainer>
    <CommonFooter />
    <DefaultFooter />
  </FooterContainer>
);

export default Footer;
