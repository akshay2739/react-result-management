import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import StudentSignIn from './StudentSignIn'
import StudentSignUp from './StudentSignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

const StudentDashboard = (props) => {
       
    let { path } = useRouteMatch();

    return (
        <div>
            <Navbar signin='/studentsignin' signup='/studentsignup'/>
            <Switch>
                <Route exact path={path}><p>Student Dashboard</p></Route>
                <Route path={`${path}/studentsignin`} component={StudentSignIn} />
                <Route path={`${path}/studentsignup`} component={StudentSignUp} />
            </Switch>
        </div>
    );

    
    }
export default  StudentDashboard