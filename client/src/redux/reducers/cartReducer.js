import * as actionType from '../constants/cartConstants.js';

export const cartReducer = (state = {cartItems : []}, action) => {
    switch(action.type){
        case (actionType.ADD_TO_CART):
            const item = action.payload;
            console.log("hey1");
            console.log(action.payload.qty);
            const exist = state.cartItems.find(product => product.id === item.id);

            if(exist){
                return{...state, cartItems: state.cartItems.map(data => 
                    {
                        data.qty = data.qty + 1;
                        console.log(data.product === exist.product ? item : data)
                        return data.product === exist.product ? item : data
                    })};
            }else{
                return {...state, cartItems: [...state.cartItems, item]};
            }
        case actionType.REMOVE_FROM_CART:
            return {...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)};

        default:
            return state;
    }
}