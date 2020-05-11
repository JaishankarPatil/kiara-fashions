import shopActionType from "./shop.type";

export const fetchShopItemsStart = () => ({
  type: shopActionType.FETCH_STORE_ITEMS_START,
});

export const fetchShopItemsSucess = (StoreItems) => ({
  type: shopActionType.FETCH_STORE_ITEMS_SUCCESS,
  payload: StoreItems,
});

export const fetchShopItemsFailure = (errorMessage) => ({
  type: shopActionType.FETCH_STORE_ITEMS_SUCCESS,
  payload: errorMessage,
});
