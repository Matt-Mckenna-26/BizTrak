import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {navigate} from '@reach/router';
import {Link} from "@reach/router";

const MeetingView = (props) => {
    const [meeting, setMeeting] = useState({})
    const [loaded, setLoaded] = useState(false)

    const formatDate = (date) => {
        const options = {
            month:"2-digit",
            day:"2-digit",
            timeZone: "America/New_York",
            hour: 'numeric'
            }
        return new Date(date).toLocaleDateString("en-US",options)
    }
    const {userId} = props
    const {meetingId} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/viewMeeting/${userId}/${meetingId}`, 
        {withCredentials:true})
            .then(res => {
                setMeeting(res.data)
                setLoaded(true)
                }
            ).catch( err => {
                console.log({err})
            })}, [])

    return (
        <Card className='mt-5 p-5'>
            {loaded === true ? 
            <Card.Body>
                    <Card.Title><h1>{meeting.title}</h1></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">More information</Card.Subtitle>
                        <Card.Text className ='mt-4'>
                            <h2>Time : {formatDate(meeting.time)}</h2>
                            <h3>Notes : {meeting.notes}</h3>
                        </Card.Text>
                        <Button className='btn btn-md' variant='primary'><Link to='/dashboard' className='text-light text-decoration-none'>Back to DashBoard</Link></Button>
                </Card.Body>
                : null
            }
        </Card>
    )
}

export default MeetingView