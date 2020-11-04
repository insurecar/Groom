export const ADD_PRODUCT = "CART/ADDPRODUCT";
export const REMOVE_PRODUCT = "CART/REMOVEPRODUCT";

export const addProduct = (dataProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      dataProduct,
    },
  };
};

export const removeProduct = (dataId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      dataId,
    },
  };
};
