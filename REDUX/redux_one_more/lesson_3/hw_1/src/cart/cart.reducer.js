import { ADD_PRODUCT, REMOVE_PRODUCT } from "../cart/cart.actions";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.dataProduct),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((user) => user.id !== action.payload.dataId),
      };
    default:
      return state;
  }
};

export default cartReducer;
