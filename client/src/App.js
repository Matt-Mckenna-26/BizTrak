import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'fontsource-roboto';
import LandingPage from './Views/LandingPage';
import DashBoard from './Views/Dashboard';
import ErrorPage from './Views/ErrorPage';
import {Router} from '@reach/router';
import TaskForm from './Views/TaskForm';
import TaskView from './Views/TaskView';

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage path='/'/>
        <DashBoard path='/dashboard'/>
        <ErrorPage path='/error'/>
        <TaskForm path='/addTask/:userId'/>
        <TaskView path='/viewTask/:userId/:taskId' />
      </Router>
    </div>
  );
}

export default App;
