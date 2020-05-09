import shopActionType from "./shop.type";
import {
  firestore,
  convertStoreItemsSnapshotToMap,
} from "../../firebase/firebase.utils";

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

export const fetchShopItemsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("ShopItems");
    dispatch(fetchShopItemsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const convartedStoreMap = convertStoreItemsSnapshotToMap(snapshot);
        dispatch(fetchShopItemsSucess(convartedStoreMap));
      })
      .catch((error) => dispatch(fetchShopItemsFailure(error.message)));
  };
};
