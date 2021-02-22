import React, {useState} from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import {navigate} from '@reach/router';

const ContactForm = (props) => {
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('');

    const {userId} = props

    const addContact = (e) => {
        e.preventDefault();
        const newContact =  {name: name, notes:notes, position:position, email: email, phone:phone};
        axios.put(`http://localhost:8000/api/addContact/${userId}`, newContact, 
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
                <h1 className='text-light pt-5'>Add Contact</h1>
                <Form className='mx-auto col-10 align-right p-5'>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Position:</Form.Label>
                        <Form.Control type='text' onChange={(e)=> setPosition(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Phone:</Form.Label>
                        <Form.Control type='text' onChange={(e)=> setPhone(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' onChange={(e)=> setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as='textarea' rows={3} onChange={(e)=> setNotes(e.target.value)}/>
                    </Form.Group>
                    <Button onClick={addContact}>Add Contact</Button>
                    <Button className ='m-3 btn btn-danger' onClick={(e)=> navigate('/dashboard')}>Cancel</Button>
                </Form>
        </div>
    )
}

export default ContactForm