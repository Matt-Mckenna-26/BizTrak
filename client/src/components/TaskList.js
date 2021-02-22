import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from 'react-bootstrap';
import {Link, navigate} from '@reach/router';
import { Checkbox } from '@material-ui/core';
import axios from 'axios';
import shadows from '@material-ui/core/styles/shadows';

const TaskList = ({loggedInUser, loaded}) => {
    let userTasks = loggedInUser.tasks
    const [taskList, setTaskList] = useState([loggedInUser.tasks])

    const formatDate = (date) => {
        const options = {
            year: "2-digit",
            month:"2-digit",
            day:"2-digit"
            }
        return new Date(date).toLocaleDateString("en-US",options)
    }
    const removeTask = (task) => {
        axios.put(`http://localhost:8000/api/deleteTask/${loggedInUser._id}`, {taskId: task}, 
            {
            withCredentials: true
            }
        ).then (res => {
            console.log(res)
        })
                .catch(err => console.log(err))
        .catch( err => {
            console.log({err});
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Tasks</TableCell>
                    <TableCell align="right">Due Date</TableCell>
                </TableRow>
                </TableHead>
                {loaded === true ? 
                    <TableBody>
                    {userTasks.map((task, idx) => {
                        let formattedTaskdate = formatDate(task.dueDate);
                        return(
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <Link to={`/viewTask/${loggedInUser._id}/${task._id}`}>{task.title}</Link>
                            </TableCell>
                            <TableCell align="right">{formattedTaskdate}</TableCell>
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