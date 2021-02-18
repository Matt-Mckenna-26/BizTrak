import React, {useState, useEffect} from 'react' ;
import axios from 'axios';
import { navigate } from '@reach/router';
import DashBoardHeader from '../components/DashBoardHeader';
import TasksCard from '../components/TasksCard';
import MeetingsCard from '../components/MeetingsCard';
import ContactsCard from '../components/ContactsCard';
import OrgsCard from '../components/OrgsCard';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/loggedin', 
        {withCredentials:true})
            .then(res => {
                setLoggedInUser(res.data)
                }
            ).catch( err => {
                console.log({err})
                navigate('/error')
            })}, [])
    return (
        <>
            <DashBoardHeader loggedInUser={loggedInUser}/>
            <TasksCard/>
            <MeetingsCard/>
            <ContactsCard />
            <OrgsCard />
        </>
    )
}

export default DashBoard;