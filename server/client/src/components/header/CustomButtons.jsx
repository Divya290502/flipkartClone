import {Badge, Box, Button, Typography, styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react';

import { DataContext } from '../../context/DataProvider.jsx';

import { Link } from 'react-router-dom';

import Profile from './Profile.jsx';

import { useSelector } from 'react-redux';

//components
import LoginDialog from '../login/LoginDialog';

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

function CustomButtons(){
    const [open, setOpen] = React.useState(false);
    const {account, setAccount} = useContext(DataContext);
    const {cartItems} = useSelector(state => state.cart);

    function openDialog(){
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
            <Typography style={{ marginTop: 3, width: 135, textTransform: 'none', height: 32 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container>
                <Badge badgeContent = {cartItems?.length} color = 'secondary'>
                    <ShoppingCartIcon />
                </Badge>
                <Link to = "/cart" style = {{textTransform: "none", color: "inherit", textDecoration:"none"}}><Typography>Cart</Typography></Link>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    )
}
export default CustomButtons;