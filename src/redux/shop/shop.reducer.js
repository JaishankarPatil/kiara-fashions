import SHOP_DATA from "./shop.data";
import shopActionType from "./shop.type";

const INITIAL_STATE = {
  StoreItems: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case shopActionType.SET_STORE_ITEMS:
      return {
        ...state,
        StoreItems: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
