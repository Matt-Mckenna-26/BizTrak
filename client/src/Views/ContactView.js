import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {navigate} from '@reach/router';
import {Link} from "@reach/router";

const ContactView = (props) => {
    const [contact, setContact] = useState({})
    const [loaded, setLoaded] = useState(false)

    const {userId} = props
    const {contactId} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/viewContact/${userId}/${contactId}`, 
        {withCredentials:true})
            .then(res => {
                setContact(res.data)
                setLoaded(true)
                }
            ).catch( err => {
                console.log({err})
            })}, [])

    return (
        <div className='p-5'>
            <Card style ={{width: '40rem'}} className='mx-auto'>
                {loaded === true ? 
                <Card.Body>
                        <Card.Title><h1>{contact.name}</h1></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Position : {contact.position}</Card.Subtitle>
                            <Card.Text className ='mt-4'>
                                <h2>Phone : {contact.phone}</h2>
                                <h2>Email : {contact.email}</h2>
                                <h3>Notes : {contact.notes}</h3>
                            </Card.Text>
                            <Button className='btn btn-md' variant='primary'><Link to='/dashboard' className='text-light text-decoration-none'>Back to DashBoard</Link></Button>
                    </Card.Body>
                    : null
                }
            </Card>
        </div>
    )
}

export default ContactView