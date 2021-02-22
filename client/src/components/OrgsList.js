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

const OrgsList = ({loggedInUser, loaded}) => {
    let userOrgs = loggedInUser.organizations

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Organizations</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Email handle</TableCell>
                </TableRow>
                </TableHead>
                {loaded === true ? 
                    <TableBody>
                    {userOrgs.map((org, idx) => {
                        return(
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <Link to={`/viewOrg/${loggedInUser._id}/${org._id}`}>{org.name}</Link>
                            </TableCell>
                            <TableCell align="right">{org.phone}</TableCell>
                            <TableCell align="right">
                                {org.email}
                            </TableCell>
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

export default OrgsList