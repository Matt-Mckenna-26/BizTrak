import React, {useState, useEffect} from 'react' ;
import axios from 'axios';
import { navigate } from '@reach/router';
import DashBoardHeader from '../components/DashBoardHeader';
import TasksCard from '../components/TasksCard';
import MeetingsCard from '../components/MeetingsCard';
import ContactsCard from '../components/ContactsCard';
import OrgsCard from '../components/OrgsCard';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/loggedin', 
        {withCredentials:true})
            .then(res => {
                setLoggedInUser(res.data)
                setLoaded(true)
                }
            ).catch( err => {
                console.log({err})
            })}, [])

    return (
        <>
            <DashBoardHeader loggedInUser={loggedInUser}/>
            <TasksCard loggedInUser ={loggedInUser} loaded={loaded}/>
            <MeetingsCard loggedInUser ={loggedInUser} loaded={loaded}/>
            <ContactsCard />
            <OrgsCard />
        </>
    )
}

export default DashBoard;