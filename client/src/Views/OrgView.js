import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {navigate} from '@reach/router';
import {Link} from "@reach/router";

const OrgView = (props) => {
    const [org, setOrg] = useState({})
    const [loaded, setLoaded] = useState(false)

    const {userId} = props
    const {orgId} = props

    const removeOrg = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/deleteOrg/${userId}`, {organizationId: org._id}, 
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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/viewOrganization/${userId}/${orgId}`, 
        {withCredentials:true})
            .then(res => {
                setOrg(res.data)
                setLoaded(true)
                }
            ).catch( err => {
                console.log({err})
            })}, [])

    return (
        <div className='p-5'>
            <Card className='mx-auto col-11' className='mx-auto'>
                {loaded === true ? 
                <Card.Body>
                        <Card.Title><h1>{org.name}</h1></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Address : {org.address}</Card.Subtitle>
                            <Card.Text className ='mt-4'>
                                <ul className='list-unstyled'>
                                    <b>Contacts:</b>{org.contacts.map((contact, idx) => (
                                        <li idx={idx}>{contact}</li>
                                    ))}
                                </ul>
                                <h2>Email Handle: {org.email}</h2>
                                <h2>Main Phone: {org.phone}</h2>
                                <p>Notes : {org.notes}</p>
                            </Card.Text>
                            <Button className='btn btn-md' variant='primary'><Link to='/dashboard' className='text-light text-decoration-none'>Back to DashBoard</Link></Button>
                            <Button className='btn btn-md m-2' variant='outline-danger' onClick={removeOrg}>Delete Organization</Button>
                    </Card.Body>
                    : null
                }
            </Card>
        </div>
    )
}

export default OrgView