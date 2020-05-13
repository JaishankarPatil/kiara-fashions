import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopStoreIsLoding = createSelector(
  [selectShop],
  (shop) => shop.isLoading
);

export const selectShopStoreItems = createSelector(
  [selectShop],
  (shop) => shop.StoreItems
);

export const selectStoreItemsPreview = createSelector(
  [selectShopStoreItems],
  (StoreItems) => Object.keys(StoreItems).map((key) => StoreItems[key])
);

export const selectShopStoreItem = (setcionId) =>
  createSelector([selectStoreItemsPreview], (items) =>
    items.filter((item) => item.title.toLowerCase() === setcionId)
  );

/* export const selectShopStoreItem = (setcionId) =>
  createSelector([selectShopStoreItems], (StoreItems) => StoreItems[setcionId]);
 */
