import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom'
import FacultySignIn from './FacultySignIn'
import FacultySignUp from './FacultySignUp'


const FacultyDashboard = () => {
    
    const { path } = useRouteMatch()
    
    return (
            <div>
                <Navbar signin="/facultysignin" signup="/facultysignup"/>
                    <Switch>
                        <Route exact path={path}><p>Student Dashboard</p></Route>
                        <Route path={`${path}/facultysignin`} component={FacultySignIn} />
                        <Route path={`${path}/facultysignup`} component={FacultySignUp} />
                    </Switch>
            </div> 
        )
    
}

export default  FacultyDashboard