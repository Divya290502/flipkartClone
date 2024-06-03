import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {addToCart} from '../../redux/actions/cartActions.js';

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = (item) => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()}disabled={counter == 0}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;