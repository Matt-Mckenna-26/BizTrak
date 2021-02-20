import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from 'react-bootstrap';
import {Link} from '@reach/router';
import { Checkbox } from '@material-ui/core';

const ContactsList = ({loggedInUser, loaded}) => {
    let userContacts = loggedInUser.contacts

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Contact</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                </TableRow>
                </TableHead>
                {loaded === true ? 
                    <TableBody>
                    {userContacts.map((contact, idx) => {
                        return(
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <Link to={`/viewContact/${loggedInUser._id}/${contact._id}`}>{contact.name}</Link>
                            </TableCell>
                            <TableCell align="right">{contact.email}</TableCell>
                            <TableCell align="right">{contact.phone}</TableCell>
                        </TableRow>
                            )
                        })
                    }
                    </TableBody>
                    : null}
            </Table>
        </TableContainer>
    )
}

export default ContactsList