import shopActionType from "./shop.type";

export const setShopData = (StoreItems) => ({
  type: shopActionType.SET_STORE_ITEMS,
  payload: StoreItems,
});
