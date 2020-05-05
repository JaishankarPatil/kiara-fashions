import React from "react";

import {
  CartComponentContainer,
  ImageContainer,
  ItemDetail,
  ItemName,
  ItemPrice,
} from "./caert-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartComponentContainer>
      <ImageContainer src={imageUrl} />
      <ItemDetail>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {" "}
          {quantity}X{price}
        </ItemPrice>
      </ItemDetail>
    </CartComponentContainer>
  );
};

export default CartItem;
