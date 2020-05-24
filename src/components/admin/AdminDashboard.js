import React from 'react';
import Navbar from '../layout/Navbar'
import AdminSignUp from './AdminSignUp'
import AdminSignIn from './AdminSignIn'
import AdminHome from './AdminHome'
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import { connect } from 'react-redux';
const AdminDashboard = (props) => {
        
    let { path } = useRouteMatch();    
    
    return (
        <div>
            <Navbar signin='/adminsignin' signup='/adminsignup'/>
            <Switch>
                <Route exact path={path} component={AdminHome}/>
                <Route path={`${path}/adminsignin`} component={AdminSignIn} />
                <Route path={`${path}/adminsignup`} component={AdminSignUp} />
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        firebase:state.firebase
    }
}

export default connect(mapStateToProps)(AdminDashboard)