import React from 'react'
import Navbar from '../layout/Navbar'
import {Switch, Route, useRouteMatch } from 'react-router-dom'
import FacultySignIn from './FacultySignIn'
import FacultyHome from './FacultyHome'
import { connect } from 'react-redux'


const FacultyDashboard = (props) => {
    
    const { path } = useRouteMatch()
    //console.log(props.students)
    
    return (
            <div>
                <Navbar signin="/facultysignin" signup="/facultysignup"/>
                    <Switch>
                        <Route exact path={path}><FacultyHome /></Route>
                        <Route path={`${path}/facultysignin`} component={FacultySignIn} />
                    </Switch>
            </div> 
        )
    
}

const mapStateToProps = (state) => {
    return{
        students:state.faculty.students,
        auth: state.firebase.auth
    }
}



export default connect(mapStateToProps) (FacultyDashboard)