import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import shopReducer from "../redux/shop/shop.reducer";
import cartReducer from "../redux/cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "shop"],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
