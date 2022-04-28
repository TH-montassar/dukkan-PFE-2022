import { instance } from "../../apis/api.instance";

import {
    CHECKOUT_ORDER,
	ORDER_ERROR,
	ORDER_LOADING,
	EMPTY_CART,CREATE_ORDER,GET_ORDER,GET_MY_ORDER
    
  } from "../Constants/action";
  export const checkoutOrder = () => async (dispatch) => {
	dispatch({
		type: ORDER_LOADING,
	});

	try {
		const res = await instance.get("/api/orders/checkout");
		dispatch({
			type: CHECKOUT_ORDER,
			payload: res.data,
		});
		dispatch({
			type: EMPTY_CART,
		});
	} catch (err) {
		dispatch({
			type: ORDER_ERROR,
			payload: err,
		});
	}
};