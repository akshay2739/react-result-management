import React from 'react'
import Navbar from '../layout/Navbar'
import {Switch, Route, useRouteMatch } from 'react-router-dom'
import FacultySignIn from './FacultySignIn'
import FacultySignUp from './FacultySignUp'
import StudentsList from './StudentsList'
import { connect } from 'react-redux'


const FacultyDashboard = (props) => {
    
    const { path } = useRouteMatch()
    //console.log(props.students)
    return (
            <div>
                <Navbar signin="/facultysignin" signup="/facultysignup"/>
                    <Switch>
                        <Route exact path={path}><StudentsList students = {props.students} /></Route>
                        <Route path={`${path}/facultysignin`} component={FacultySignIn} />
                        <Route path={`${path}/facultysignup`} component={FacultySignUp} />
                    </Switch>
            </div> 
        )
    
}

const mapStateToProps = (state) => {
    return{
        students:state.faculty.students
    }
}



export default connect(mapStateToProps) (FacultyDashboard)