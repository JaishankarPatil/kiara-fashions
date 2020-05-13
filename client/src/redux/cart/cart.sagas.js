import { all, put, takeLatest, call } from "redux-saga/effects";

import userActionTypes from "../user/user.types";
import { clearCart } from "../cart/cart.action";

export function* clearCartonSignOut() {
  yield put(clearCart());
}

export function* onSignOutClearCart() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartonSignOut);
}

export default function* cartSaga() {
  yield all([call(onSignOutClearCart)]);
}
