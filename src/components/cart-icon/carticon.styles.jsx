import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  cursor: pointer;
  margin-top: 20px;
  margin-right: 35px;
  display: flex;
`;
export const CartIconSize = styled.div`
  width: 20px;
  height: 20px;
  color: white;
`;

export const CartItemsCount = styled.div`
  position: top;
  background-color: grey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: 15px;

  span {
    color: gold;
    font-size: 18px;
    margin-left: 3px;
    line-height: 30px;
  }
`;
