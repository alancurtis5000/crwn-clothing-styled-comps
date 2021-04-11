import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, collections: action.payload, isFetching: true };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default shopReducer;
