import { CoPresentOutlined, ErrorSharp } from '@mui/icons-material';
import axios from 'axios';
import * as actionTypes from '../constants/productConstant.js';

//const URL = 'http://localhost:8000';
const URL = '';

export const getProducts = () => async(dispatch) => {
    try{
        let {data} = await axios.get(`${URL}/products`);
        console.log(data);
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: ErrorSharp.message});
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try{
        //dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST, payload: data})
        //console.log("hey");
        let {data} = await axios.get(`${URL}/product/${id}`);
        console.log(data);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: ErrorSharp.message});
    }
}