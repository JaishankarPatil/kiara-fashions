import shopActionType from "./shop.type";

const INITIAL_STATE = {
  StoreItems: [],
  isLoading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  //console.log("action.payload", action.payload);
  switch (action.type) {
    case shopActionType.FETCH_STORE_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopActionType.FETCH_STORE_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        StoreItems: action.payload,
      };
    case shopActionType.FETCH_STORE_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        StoreItems: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
