import React, { Component } from 'react';
import Navbar from '../layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminSignUp from './AdminSignUp'
import AdminSignIn from './AdminSignIn'

class AdminDashboard extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Navbar signin="/adminsignin" signup="/adminsignup"/>
                    <Switch>
                        <Route path="/adminsignin" component={AdminSignIn} />
                        <Route path="/adminsignup" component={AdminSignUp} />
                    </Switch>
                </BrowserRouter>

                
        );
    }
}

export default AdminDashboard;
