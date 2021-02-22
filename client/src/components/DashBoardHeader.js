import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {Badge} from 'react-bootstrap';
import {Menu, Button, MenuItem} from '@material-ui/core'
import Logo from '../Images/BizTrak.png'

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
            <Badge pill variant='light' className='d-block my-3 text-primary mx-auto text-center col-10' style={{height:'7rem'}}>
                <h1 className='align-top'>Welcome to Biztrak, <br/>{loggedInUser.username}</h1>
            </Badge>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color='default' variant='contained' className='d-block mx-auto'>
            Navigate Your Dashboard Here
            </Button>
            <img src={Logo} style={{width:'15rem'}} className='m-3'/>
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