import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  authReducer,
  userDetailsReducer,
  userReducer,
} from "../Reducers/userReducers";
import {
  newProductReducer,
  newReviewReducer,
  productDetailReducer,
  productReducer,
  productsReducer,
} from "../Reducers/productReducer";
import { cartReducer } from "../Reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "../Reducers/orderReducers";

const reducer = combineReducers({
  products: productsReducer,
  productdetail: productDetailReducer,
  product: productReducer,
  newProduct: newProductReducer,
  newReview: newReviewReducer,

  auth: authReducer,
  allUsers: allUsersReducer,
  user: userReducer,
  userDetails: userDetailsReducer,

  cart: cartReducer,

  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,

  allOrders: allOrdersReducer,
  order: orderReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems-cake")
      ? JSON.parse(localStorage.getItem("cartItems-cake"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo-cake")
      ? JSON.parse(localStorage.getItem("shippingInfo-cake"))
      : {},
    token: localStorage.getItem("tokenUser")
      ? JSON.parse(localStorage.getItem("tokenUser"))
      : {},
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
