import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'fontsource-roboto';
import LandingPage from './Views/LandingPage';
import DashBoard from './Views/Dashboard';
import ErrorPage from './Views/ErrorPage';
import {Router} from '@reach/router';
import TaskForm from './Views/TaskForm';
import TaskView from './Views/TaskView';
import MeetingView from './Views/MeetingView';
import ContactView from './Views/ContactView'
import axios from 'axios';
import {navigate} from '@reach/router'
import OrgView from './Views/OrgView';

function App() {
  const logout = () => {
    axios.post(
      "/api/logout",
      {},
      {withCredentials: true}
    )
      .then(res => {console.log(res)
      })
      .catch(console.log)
          navigate('/')
  }
  return (
    <div className="App">
      <Router>
        <LandingPage path='/'/>
        <DashBoard path='/dashboard' logout={logout}/>
        <ErrorPage path='/error'/>
        <TaskForm path='/addTask/:userId'/>
        <TaskView path='/viewTask/:userId/:taskId' />
        <MeetingView path='/viewMeeting/:userId/:meetingId' />
        <ContactView path='/viewContact/:userId/:contactId' />
        <OrgView path ='/viewOrg/:userId/:orgId' />
      </Router>
    </div>
  );
}

export default App;
