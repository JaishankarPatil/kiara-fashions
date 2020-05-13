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
  background-color: #b2babb;
  width: 3vmax;
  height: 3vmax;
  border-radius: 50%;
  margin-top: -0.5vmax;
  margin-left: 1.4vmax;
  display: flex;
  justify-content: space-around;
`;

export const CartItemCountNum = styled.span`
  color: #fff;
  font-size: 1.9vmax;
  line-height: 3vmax;
`;
