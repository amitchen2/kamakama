import React from 'react';
import {  Typography } from '@mui/material';
import { AppBar } from './TopAppBar.style';
const TopAppBar = () => {
return (
    <AppBar>
        <Typography sx={{fontSize:{s: "16px" ,xs:"16px", md:"22px", lg:"28px" }}}>כמה כמה</Typography>
    </AppBar>
        
)
}

export default TopAppBar;