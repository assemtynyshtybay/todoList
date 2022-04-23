import axios from "axios";

import { SET_PRODUCTS, ADD_TO_BASKET, INC_IN_BASKET, DEC_IN_BASKET} from "../types/shop"

export const fetchShop = () => dispatch => {
  axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      dispatch(
        {
          type: SET_PRODUCTS,
          payload: res.data,
        }
      )
    })

}
export const addToBasket = (product) => (dispatch) => {
  dispatch({
      type: ADD_TO_BASKET,
      payload: product,
  })
}
export const incCounter = (product) => (dispatch) => {
  dispatch({
    type: INC_IN_BASKET,
    payload: product.id,
})
}
export const decCounter = (product) => (dispatch) => {
  dispatch({
    type: DEC_IN_BASKET,
    payload: product.id,
})
}