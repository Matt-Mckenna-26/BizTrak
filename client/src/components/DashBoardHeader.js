import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {Menu, Button, MenuItem} from '@material-ui/core'

const DashBoardHeader = ({loggedInUser}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <h1 className='m-3 text-primary'>Welcome to Biztrak, {loggedInUser.username}</h1>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color='primary' variant='outlined' className='d-block mx-auto'>
            Navigate Your Dashboard
            </Button>
            <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Tasks</MenuItem>
                <MenuItem onClick={handleClose}>Meetings</MenuItem>
                <MenuItem onClick={handleClose}>Contacts</MenuItem>
                <MenuItem onClick={handleClose}>Organizations</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
        </>
    )
}

export default DashBoardHeader;