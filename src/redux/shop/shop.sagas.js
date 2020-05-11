import { call, takeLatest, put, all } from "redux-saga/effects";
import shopActionType from "./shop.type";
import {
  firestore,
  convertStoreItemsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchShopItemsSucess, fetchShopItemsFailure } from "./shop.action";

export function* fetchShopItemsStartAsync() {
  try {
    const collectionRef = firestore.collection("ShopItems");
    const snapshot = yield collectionRef.get();
    const convartedStoreMap = yield call(
      convertStoreItemsSnapshotToMap,
      snapshot
    );
    yield put(fetchShopItemsSucess(convartedStoreMap));
  } catch (error) {
    yield put(fetchShopItemsFailure(error.message));
  }
}

export function* fetchShopItemsStart() {
  yield takeLatest(
    shopActionType.FETCH_STORE_ITEMS_START,
    fetchShopItemsStartAsync
  );
}

export default function* shopSaga() {
  yield all([call(fetchShopItemsStart)]);
}
