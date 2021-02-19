import React, {useState} from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router';

const TaskForm = (props) => {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [dueDate, setDueDate] = useState("");

    const {userId} = props

    const addTask = (e) => {
        e.preventDefault();
        const newTask =  {title: title, notes:notes, dueDate:dueDate};
        axios.put(`http://localhost:8000/api/addTask/${userId}`, newTask, 
            {
            withCredentials: true
            }
        ).then (res => {
            console.log(res)
            navigate('/dashboard')
        })
                .catch(err => console.log(err))
        .catch( err => {
            console.log({err});
        })
    }

    return (
        <div>
                <h1>Add another Task to your agenda.</h1>
                <Form className='mx-auto col-10 align-right p-5'>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type='text' onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Due Date:</Form.Label>
                        <Form.Control type='date' onChange={(e)=> setDueDate(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as='textarea' rows={3} onChange={(e)=> setNotes(e.target.value)}/>
                    </Form.Group>
                    <Button onClick={addTask}>Add Task</Button>
                </Form>
        </div>
    )
}

export default TaskForm