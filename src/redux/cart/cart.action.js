import CartTypeAction from "./cart.type";

export const toggelCartDropdown = () => ({
  type: CartTypeAction.TOGGEL_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: CartTypeAction.ADD_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartTypeAction.REMOVE_CART,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartTypeAction.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartTypeAction.CLEAR_CART,
});
