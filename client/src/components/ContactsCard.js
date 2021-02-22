import React from 'react';
import {Card, Button} from 'react-bootstrap'
import ContactsList from './ContactsList';
import {Link} from '@reach/router';

const ContactsCard = ({loggedInUser, loaded}) => {
    return (
        <Card className='mx-lg-3 my-3 p-2 col-sm-10 col-lg-5 d-inline-block align-top' id='contacts' style ={{height: '40rem'}}>
            <Card.Body>
                <Card.Title><h1>Your Contacts</h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">View Contact details and add notes...</Card.Subtitle>
                <Button className='btn btn-sm btn-success m-2'>
                        <Link to={`/addTask/${loggedInUser._id}`} className='text-light text-decoration-none'>Add Contact</Link>
                </Button>
                    <Card.Text style={{height:'25rem', overflow:'scroll'}}>
                            <ContactsList loggedInUser={loggedInUser} loaded={loaded} />
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ContactsCard;