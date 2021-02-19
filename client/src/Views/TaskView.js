import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {navigate} from '@reach/router';
import {Link} from "@reach/router";

const TaskView = (props) => {
    const [task, setTask] = useState({})
    const [loaded, setLoaded] = useState(false)

    const formatDate = (date) => {
        const options = {
            year: "2-digit",
            month:"2-digit",
            day:"2-digit"
            }
        return new Date(date).toLocaleDateString("en-US",options)
    }
    const {userId} = props
    const {taskId} = props
    console.log(userId, taskId);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/viewTask/${userId}/${taskId}`, 
        {withCredentials:true})
            .then(res => {
                setTask(res.data)
                setLoaded(true)
                }
            ).catch( err => {
                console.log({err})
            })}, [])

    return (
        <Card className='mt-5 p-5'>
            {loaded === true ? 
            <Card.Body>
                    <Card.Title><h1>{task.title}</h1></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">More information</Card.Subtitle>
                        <Card.Text className ='mt-4'>
                            <h2>Due Date : {formatDate(task.dueDate)}</h2>
                            <h3>Notes : {task.notes}</h3>
                        </Card.Text>
                        <Button className='btn btn-md' variant='primary'><Link to='/dashboard' className='text-light text-decoration-none'>Back to DashBoard</Link></Button>
                </Card.Body>
                : null
            }
        </Card>
    )
}

export default TaskView