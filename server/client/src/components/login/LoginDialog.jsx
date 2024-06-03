import {Box, Dialog, TextField, Typography, Button, styled} from '@mui/material';
import { maxWidth } from '@mui/system';
import React, {useContext} from 'react';

import { authenticateSignup, authenticateLogin } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh
`
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 82.%;
    width: 30%;
    padding: 45px 35px;
    & > p, & > h5{
        color: #fff;
        font-weight: 600;
    }
`
const Wrapper = styled(Box)`
    dispaly: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    width: 100%;
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: ##2874f0;
    height: 48px;
    border-radius: 2px;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20)
`
const Text = styled(Typography)`
    font-size: 14px;
    color: #8787
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600
`

const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subheading: "Get access to your Orders, Wishlist and Recommendations"
    }, 
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: "Sign up with your mobile number to get started"
    }
};

const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
};

const loginInitialValues = {
    username: "",
    password: ""
}

function LoginDialog(props){
    const [account, toggleAccount] = React.useState(accountInitialValues.login);
    const [signup, setSignup] = React.useState(signupInitialValues);
    const [login, setLogin] = React.useState(loginInitialValues);
    const [error, setError] = React.useState(false);

    const {setAccount} = useContext(DataContext);

    function handleClose(){
        props.setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
    
    function toggleSignup(){
        toggleAccount(accountInitialValues.signup);
    }

    function onInputChange(event){
        setSignup({...signup, [event.target.name]: event.target.value});
        //console.log(signup);
    }

    function onValueChange(event){
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const signupUser = async function(){
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const loginUser = async function(){
        let response = await authenticateLogin(login);
        if(response && response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

    return (
        <Box>
            <Dialog open = {props.open} onClose = {handleClose} PaperProps = {{sx: {maxWidth: "unset", maxHeight: "unset"}}}>
                <Component>
                    <Box style ={{display: "flex", height: "100%"}}>
                        <Image>
                            <Typography variant = "h5">{account.heading}</Typography>
                            <Typography >{account.subheading}</Typography>
                        </Image>
                        <Box>

                        </Box>
                        {
                            account.view === 'login' ?
                            <Wrapper>
                                <TextField variant = "standard" onChange = {onValueChange} name = "username" label = "Enter Username" style={{width: "100%"}}/>
                                <TextField variant = "standard" onChange = {onValueChange} name = "password" label = "Enter password" style={{width: "100%"}}/>
                                {error && <Error>Please enter valid username and password</Error>}
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick = {loginUser}>
                                    Login
                                </LoginButton>
                                <Typography style = {{textAlign: "center"}}>OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick = {toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper> 
                            :
                            <Wrapper>
                                <TextField variant = "standard" label = "Enter Firstname" onChange = {onInputChange} name="firstname" style={{width: "100%"}}/>
                                <TextField variant = "standard" label = "Enter Lastname" onChange = {onInputChange} name="lastname" style={{width: "100%"}}/>
                                <TextField variant = "standard" label = "Username" onChange = {onInputChange} name="username" style={{width: "100%"}}/>
                                <TextField variant = "standard" label = "Email" onChange = {onInputChange} name="email" style={{width: "100%"}}/>
                                <TextField variant = "standard" label = "Enter Phone" onChange = {onInputChange} name="phone" style={{width: "100%"}}/>
                                <TextField variant = "standard" label = "Enter Password" onChange = {onInputChange} name="password" style={{width: "100%"}}/>
                                <LoginButton onClick={signupUser}>Continue</LoginButton>
                            </Wrapper>
                        }
                        
                    </Box>
                </Component>
            </Dialog>
        </Box>
    )
}

export default LoginDialog;