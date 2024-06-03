import { Box, Menu, MenuItem, Typography, styled } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px
`
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`

const Profile = function(props){

    const [open, setOpen] = useState(false);

    function handleClick(event){
        setOpen(event.currentTarget);
    }

    function handleClose(){
        setOpen(false);
    }

    function logout(){
        props.setAccount('');
    }
    return (
        <>
            <Box>
                <Typography onClick= {handleClick} style={{marginTop: 2, cursor: "pointer"}}>{props.account}</Typography>
            </Box>
                <Menu
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick = {() => {handleClose(); logout();}}>
                        <PowerSettingsNewIcon color = "primary" fontSize = "small"/>
                        <Logout>
                            Logout
                        </Logout>
                    </MenuItem>
                </Menu>
        </>
    )
}

export default Profile;