import React from "react";

import { ReactComponent as FreeShippingImage } from "../../assets/free.svg";
import { ReactComponent as SecuredPaymentImage } from "../../assets/payment.svg";
import { ReactComponent as NoCostEMIImage } from "../../assets/finance.svg";

import {
  HeaderBottomContainer,
  HeaderBottomItem,
  SVGImageSize,
  SVGTextStyle,
  EMIIMageSize,
} from "./header-bottom.styles";

const HeaderBottom = () => (
  <HeaderBottomContainer>
    <HeaderBottomItem>
      <SVGImageSize>
        <FreeShippingImage />
      </SVGImageSize>
      <SVGTextStyle>Free Shipping on All Orders</SVGTextStyle>
    </HeaderBottomItem>
    <HeaderBottomItem>
      <SVGImageSize>
        <SecuredPaymentImage />
      </SVGImageSize>
      <SVGTextStyle>Secured Online Payment</SVGTextStyle>
    </HeaderBottomItem>
    <HeaderBottomItem>
      <EMIIMageSize>
        <NoCostEMIImage />
      </EMIIMageSize>
      <SVGTextStyle>No Cost EMI On All Orders</SVGTextStyle>
    </HeaderBottomItem>
  </HeaderBottomContainer>
);

export default HeaderBottom;
