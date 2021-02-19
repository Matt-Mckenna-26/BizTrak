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

const MeetingsList = ({loggedInUser, loaded}) => {
    let userMeetings = loggedInUser.meetings

    const formatDate = (date) => {
        const options = {
            month:"2-digit",
            day:"2-digit",
            timeZone: "America/New_York",
            hour: 'numeric'
            }
        return new Date(date).toLocaleDateString("en-US",options)
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Meetings</TableCell>
                    <TableCell align="right">Date/Time</TableCell>
                    <TableCell align="right">Complete?</TableCell>
                </TableRow>
                </TableHead>
                {loaded === true ? 
                    <TableBody>
                    {userMeetings.map((meeting, idx) => {
                        let formattedMeetingDate = formatDate(meeting.time);
                        return(
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <Link to='/'>{meeting.title}</Link>
                            </TableCell>
                            <TableCell align="right">{formattedMeetingDate}</TableCell>
                            <TableCell align="right">
                                <Checkbox />
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

export default MeetingsList