import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalator, cartItem) =>
        accumalator + cartItem.quantity * cartItem.price,
      0
    )
);

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accuamalator, cartItem) => accuamalator + cartItem.quantity,
      0
    )
);
