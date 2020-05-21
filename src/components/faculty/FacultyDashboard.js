import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FacultySignIn from './FacultySignIn'
import FacultySignUp from './FacultySignUp'

export default class FacultyDashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar signin="/facultysignin" signup="/facultysignup"/>
                <Switch>
                    <Route path="/facultysignin" component={FacultySignIn} />
                    <Route path="/facultysignup" component={FacultySignUp} />
                </Switch>
            </BrowserRouter>
        )
    }
}
