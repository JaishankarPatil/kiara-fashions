export const addItemToCart = (cartItems, itemToAddCart) => {
  const checkItemExistInCart = cartItems.find(
    (cartItem) => cartItem.id === itemToAddCart.id
  );

  if (checkItemExistInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAddCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAddCart, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToBeReove) => {
  const checkItemExist = cartItems.find(
    (cartItem) => cartItem.id === itemToBeReove.id
  );

  return checkItemExist.quantity > 1
    ? cartItems.map((cartItem) =>
        cartItem.id === itemToBeReove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    : cartItems;
};
