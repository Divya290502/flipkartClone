import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer.js';
import { cartReducer } from './reducers/cartReducer.js';

const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;