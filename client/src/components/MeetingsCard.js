import React from 'react';
import {Card, Button} from 'react-bootstrap'
import MeetingsList from './MeetingsList';
import {Link} from '@reach/router';

const MeetingsCard = ({loggedInUser, loaded}) => {
    return (
        <Card className='mx-lg-3 my-3 p-2 col-sm-10 col-lg-5 d-inline-block align-top' id ='meetings' style ={{height: '40rem'}}>
            <Card.Body>
                <Card.Title><h1>Your Meetings</h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Whose on the Calendar?</Card.Subtitle>
                <Button className='btn btn-sm btn-success m-2'>
                        <Link to={`/addMeeting/${loggedInUser._id}`} className='text-light text-decoration-none'>Add a Meeting</Link>
                </Button>
                    <Card.Text style={{height:'25rem', overflow:'scroll'}}>
                        <MeetingsList loggedInUser={loggedInUser} loaded={loaded}/>
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MeetingsCard;