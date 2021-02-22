import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap'
import TaskList from './TaskList'
import {Link} from '@reach/router'


const TasksCard = ({loggedInUser, loaded}) => {
    return (
            <Card className='mx-lg-3 my-3 p-2 col-sm-10 col-lg-5 d-inline-block' id='tasks' style ={{height: '40rem'}}>
                <Card.Body>
                    <Card.Title><h1>Your Tasks</h1></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">What do you have to get done today?</Card.Subtitle>
                    <Button className='btn btn-sm btn-success m-2'>
                        <Link to={`/addTask/${loggedInUser._id}`} className='text-light text-decoration-none'>Add a Task</Link>
                    </Button>
                        <Card.Text className ='mt-4' style={{height:'25rem', overflow:'scroll'}}>
                            <TaskList loggedInUser={loggedInUser} loaded={loaded}/>
                        </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default TasksCard