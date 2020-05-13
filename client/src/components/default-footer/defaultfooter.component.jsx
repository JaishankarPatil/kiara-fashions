import React from "react";

import {
  DefaultFooterContainer,
  DefaltFooterPaymentOption,
  DefaltFooterBrandName,
  DefaltFooterCopyright,
  VisaImage,
  MasterImage,
  AexpImage,
  EMIImage,
  WalletImage,
  CODImage,
} from "./defaultfooter.styles";

const DefaultFooter = () => (
  <DefaultFooterContainer>
    <DefaltFooterPaymentOption>
      <VisaImage />
      <MasterImage />
      <AexpImage />
      <EMIImage />
      <WalletImage />
      <CODImage />
    </DefaltFooterPaymentOption>
    <DefaltFooterBrandName>KIYARA FASHIONS</DefaltFooterBrandName>
    <DefaltFooterCopyright>
      © 2020 Kiyara Fashions Pvt Ltd.
    </DefaltFooterCopyright>
  </DefaultFooterContainer>
);

export default DefaultFooter;
