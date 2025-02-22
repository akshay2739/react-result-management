import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/layout/Home'
import AdminDashboard from './components/admin/AdminDashboard'
import FacultyDashboard from './components/faculty/FacultyDashboard'
import StudentDashboard from './components/student/StudentDashboard'



function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/facultydashboard" component={FacultyDashboard} />
            <Route path="/studentdashboard" component={StudentDashboard} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
