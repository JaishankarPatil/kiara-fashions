import styled from "styled-components";
import { FaRupeeSign, FaMinusSquare, FaPlusSquare } from "react-icons/fa";

export const FaMinusSquareSym = styled(FaMinusSquare)`
  cursor: pointer;
`;

export const FaPlusSquareSym = styled(FaPlusSquare)`
  cursor: pointer;
`;

export const CurencySym = styled(FaRupeeSign)`
  width: 16px;
  margin-top: 20px;
`;

export const CurencySymSubTotal = styled(FaRupeeSign)`
  width: 8px;
  margin-top: 20px;
`;

export const CheckoutPageContainer = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: row;
`;

export const TotalAmountContainer = styled.div`
  width: 70vw;
  position: relative;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const TotalAmountSpan = styled.div`
  font-size: 18px;
  font-family: "Playfair Display", serif;
  line-height: 40px;
  text-align: right;
  position: relative;
  margin-right: 30px;
`;

export const CheckoutCartHeader = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  justify-content: space-between;
  border-bottom: 2px solid #ddd;
  margin-top: 0px;
`;

export const CheckoutHeaderName = styled.div`
  font-size: 20px;
  font-family: "Playfair Display", serif;
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
`;

export const CheckoutHeaderPrice = styled.div`
  font-size: 15px;
  font-family: "Playfair Display", serif;
  margin-right: 30px;
  line-height: 60px;
`;

export const CheckoutItmsContainer = styled.div`
  width: 70vw;
  position: relative;
  margin-top: 2vh;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
`;

export const CheckoutItmContainer = styled.div`
  position: relative;
  width: 67vw;
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  height: 200px;
`;

export const ImageContainer = styled.img`
  position: relative;
  width: 30vw;
  padding: 20px;
`;

export const ItemDescription = styled.div`
  position: relative;
  width: 60vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;

export const QuantityContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;

export const QuantityUpdate = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  text-align: center;
  line-height: 60px;
`;

export const QuantitySpan = styled.span`
  margin: 0px 6px;
  text-align: center;
`;

export const QuantityText = styled.span`
  margin-right: 10px;
  text-align: center;
  font-family: "Manrope", sans-serif;
`;

export const RemoveContainer = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
`;

export const RemoveButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: #707b7c;
  border-radius: 2%;
  border: none;
  font-size: 12px;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-left: 15px;
  margin-top: 14px;
`;

export const ItemPrice = styled.div`
  position: relative;
  width: 10vw;
  padding-top: 20px;
  text-align: right;
`;

export const ProceedToBuyContainer = styled.div`
  width: 25vw;
  margin-left: 20px;
  height: 120px;
  margin-top: 40px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

export const ToatalAmoutPayment = styled.div`
  width: 200px;
  height: 50px;
  position: relative;
  font-size: 16px;
  font-family: "Playfair Display", serif;
  line-height: 40px;
  margin-left: 23px;
`;

export const PaymentButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #707b7c;
  border-radius: 2%;
  border: none;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-left: 25px;
`;
