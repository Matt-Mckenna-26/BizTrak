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

const TaskList = ({loggedInUser, loaded}) => {
    let userTasks = loggedInUser.tasks

    const formatDate = (date) => {
        const options = {
            year: "2-digit",
            month:"2-digit",
            day:"2-digit"
            }
        return new Date(date).toLocaleDateString("en-US",options)
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Tasks</TableCell>
                    <TableCell align="right">Due Date</TableCell>
                    <TableCell align="right">Complete?</TableCell>
                </TableRow>
                </TableHead>
                {loaded === true ? 
                    <TableBody>
                    {userTasks.map((task, idx) => {
                        let formattedTaskdate = formatDate(task.dueDate);
                        return(
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <Link to='/'>{task.title}</Link>
                            </TableCell>
                            <TableCell align="right">{formattedTaskdate}</TableCell>
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

export default TaskList