import React, {useState} from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router';

const MeetingForm = (props) => {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [day, setDay] = useState('');
    const [hourMin, setHourMin] = useState('')
    const [attendees, setAttendees] = useState([]);

    const {userId} = props
    
    const addMeeting = (e) => {
        e.preventDefault();
        const newMeeting =  {title: title, notes:notes, time:new Date(`${day}T${hourMin}`), attendees: attendees};
        axios.put(`http://localhost:8000/api/addMeeting/${userId}`, newMeeting, 
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
        <div className='text-light'>
                <h1 className='text-light pt-5'>Add Meeting</h1>
                <Form className='mx-auto col-10 align-right p-5'>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type='text' onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type='date' onChange={(e)=> setDay(e.target.value) }/>
                        <Form.Label>Time:</Form.Label>
                        <Form.Control type='time' onChange={(e)=> setHourMin(e.target.value) }/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as='textarea' rows={3} onChange={(e)=> setNotes(e.target.value)}/>
                    </Form.Group>
                    <Button onClick={addMeeting}>Add Meeting</Button>
                    <Button className ='m-3 btn btn-danger' onClick={(e)=> navigate('/dashboard')}>Cancel</Button>
                </Form>
        </div>
    )
}

export default MeetingForm