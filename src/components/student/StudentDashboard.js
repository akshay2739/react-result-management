import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import StudentSignIn from './StudentSignIn'
import StudentHome from './StudentHome'
import SelectSubject from './SelectSubject'
import {
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
                <Route exact path={path}> <StudentHome /> </Route>
                <Route path={`${path}/studentsignin`} component={StudentSignIn} />
                <Route path={path+'/selectsubject' } component={SelectSubject} />
            </Switch>
        </div>
    );

    
    }
export default  StudentDashboard