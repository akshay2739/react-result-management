import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import { BrowserRouter, Switch,Route, useRouteMatch } from 'react-router-dom'
import StudentSignIn from './StudentSignIn'
import StudentSignUp from './StudentSignUp'

const StudentDashboard = (props) => {
        let { path, url } = useRouteMatch();
        console.log('path = ',path)
        console.log('url = ',url)
        return (
            <div>
                <BrowserRouter>
                    <Navbar signin="/studentsignin" signup="/studentsignup"/>
                    <Switch>
                        <Route path="/studentsignin" component={StudentSignIn} />
                        <Route path="/studentsignup" component={StudentSignUp} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    
}
export default  StudentDashboard