import styled from "styled-components";

export const CartComponentContainer = styled.div`
  width: 240px;
  height: 150px;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ImageContainer = styled.img`
  width: 100px;
  height: 150px;
  position: relative;
`;

export const ItemDetail = styled.div`
  width: 147px;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemName = styled.span`
  font-size: 18px;
  letter-spacing: 0.5px;
  position: relative;
  margin-top: 50px;
  text-align: center;
`;

export const ItemPrice = styled.span`
  font-size: 18px;
  letter-spacing: 0.5px;
  position: relative;
  margin: 20px;
`;
