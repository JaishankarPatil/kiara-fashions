import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  width: 250px;
  height: 500px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  right: 10px;
  top: 55px;
  z-index: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CartItemContainer = styled.div`
  width: 250;
  height: 450px;
  position: relative;
  overflow: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Kaushan Script", cursive;
  line-height: 300px;
`;
