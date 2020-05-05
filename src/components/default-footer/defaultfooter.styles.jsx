import styled from "styled-components";

export const DefaultFooterContainer = styled.div`
  width: 96vw;
  height: 50px;
  background-color: white;
  position: relative;
  margin: 30px 12px;
  display: flex;
  position: relative;
`;

export const DefaltFooterPaymentOption = styled.div`
  width: 34%;

  position: relative;
`;

export const VisaImage = styled.img.attrs({
  src:
    "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/2ewe5eMPSEcIqwoU08QIOA/5d89569ef8dfe251d0b795f76e0163d1/visa-2x.png?ecom2=true&amp;width=40&amp;quality=100 1x",
})`
  height: 25px;
  width: 40px;
  margin: 10px 5px;
`;

export const MasterImage = styled.img.attrs({
  src:
    "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/2MIeYuELok46G2wAIU64Ao/dc9ffe7987f1c1654a722a3506199561/mastercard-2x.png?ecom2=true&amp;width=33&amp;quality=100 1x,",
})`
  height: 25px;
  width: 40px;
  margin: 10px 5px;
`;

export const AexpImage = styled.img.attrs({
  src:
    "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/7rjkl2vvIk46uK2ius6Uiy/bd47cf4a76b302d4a39b1176e853a712/amex-2x.png?ecom2=true&amp;width=27&amp;quality=100 1x",
})`
  height: 25px;
  width: 40px;
  margin: 10px 5px;
`;

export const EMIImage = styled.img.attrs({
  src:
    "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/4cZMcChe4TSoNIXLQOl0CF/0a9ab1979e37c8d337e57dc62a76f252/emi.png?ecom2=true&amp;width=33&amp;quality=100 1x",
})`
  height: 25px;
  width: 40px;
  margin: 10px 5px;
`;
export const WalletImage = styled.img.attrs({
  src:
    "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/63kVYOeoRp0Tyz6U7woyUi/b01a1273a4f5e83163f36c9ede2ef9ac/billdesk_wallet_2x.png?ecom2=true&amp;width=40&amp;quality=100 1x",
})`
  height: 25px;
  width: 40px;
  margin: 10px 5px;
`;
export const CODImage = styled.img.attrs({
  src:
    "https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/2W5rN6u1vG40EccMmMo4yG/5d3a51e2cad4e83bfb1b428259b99f50/cashondeliveryicon.png?ecom2=true&amp;width=50&amp;quality=100 1x",
})`
  height: 25px;
  width: 40px;
  margin: 10px 5px;
`;

export const DefaltFooterBrandName = styled.div`
  width: 34%;

  position: relative;
  line-height: 50px;
  font-family: "Cinzel", serif;
  font-size: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
`;

export const DefaltFooterCopyright = styled.div`
  width: 34%;
  position: relative;
  text-align: center;
  line-height: 50px;
  font-size: 13px;
  letter-spacing: 1px;
  font-family: "Manrope", sans-serif;
`;
