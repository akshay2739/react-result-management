import React, { Component } from 'react';
import Navbar from '../layout/Navbar'
//import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminSignUp from './AdminSignUp'
import AdminSignIn from './AdminSignIn'
import {
    BrowserRouter ,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
const AdminDashboard = () => {
        
    let { path } = useRouteMatch();

    return (
        <div>
            <Navbar signin='/adminsignin' signup='/adminsignup'/>
            <Switch>
                <Route exact path={path}><p>Admin Dashboard</p></Route>
                <Route path={`${path}/adminsignin`} component={AdminSignIn} />
                <Route path={`${path}/adminsignup`} component={AdminSignUp} />
            </Switch>
        </div>
    );
}


export default AdminDashboard;

// let { path } = useRouteMatch()
//     return (
//                 <BrowserRouter>
//                     <Navbar signin="/adminsignin" signup="/adminsignup"/>
//                     <Switch>
//                         <Route exact path={path}><p>Admin Dashboard</p></Route>
//                         <Route path={`${path}/adminsignin`} component={AdminSignIn} />
//                         <Route path={`${path}/adminsignup`} component={AdminSignUp} />
//                     </Switch>
//                 </BrowserRouter>
                
//         );