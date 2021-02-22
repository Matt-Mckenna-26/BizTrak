import React from 'react';
import {Card, Button} from 'react-bootstrap'
import OrgsList from './OrgsList';
import {Link} from '@reach/router'

const OrgsCard = ({loggedInUser, loaded}) => {
    return (
        <Card className='mx-lg-3 my-3 p-1 col-sm-10 col-lg-5 d-inline-block' id='organizations' style ={{height: '40rem'}}>
            <Card.Body>
                <Card.Title><h1>Your Organizations</h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">View Top down info on a target...</Card.Subtitle>
                <Button className='btn btn-sm btn-success m-2'>
                    <Link to={`/addTask/${loggedInUser._id}`} className='text-light text-decoration-none p-5'>Add an Organization</Link>
                </Button>
                <Card.Text style={{height:'25rem', overflow:'scroll'}}>
                    <OrgsList loggedInUser={loggedInUser} loaded={loaded}/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default OrgsCard;