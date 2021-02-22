import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {Menu, Button, MenuItem} from '@material-ui/core'

const DashBoardHeader = ({loggedInUser, logout}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='mb-5 pt-3'>
            <h1 className='mb-4 pt-3 text-light'>Welcome to Biztrak, {loggedInUser.username}</h1>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color='default' variant='contained' className='d-block mx-auto'>
            Navigate Your Dashboard
            </Button>
            <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><a className='text-decoration-none text-dark' href='#tasks'>Tasks</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='text-decoration-none text-dark' href='#meetings'>Meetings</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='text-decoration-none text-dark' href='#contacts'>Contacts</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='text-decoration-none text-dark' href='#organizations'>Organizations</a></MenuItem>
                <MenuItem onClick={handleClose && logout}>Log Out</MenuItem>
            </Menu>
        </div>
    )
}

export default DashBoardHeader;