import { ActionTypes } from "../constants/action-types";
import axiosInstance from "../../apiConstants/axiosInstance";

export const fetchProducts = () => {
  return (dispatch) => {
    axiosInstance
      .get("/products")
      .then((res) =>
        dispatch({
          type: ActionTypes.FETCH_PRODUCTS,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (productId) => {
  return (dispatch) => {
    axiosInstance
      .get(`/products/${productId}`)
      .then((res) => {
        dispatch({
          type: ActionTypes.SELECTED_PRODUCT,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
