import React from 'react'
import Navbar from '../layout/Navbar'
import {Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import FacultySignIn from './FacultySignIn'
import FacultyHome from './FacultyHome'
import AddSubject from './AddSubject'
import SubjectList from './SubjectList'
import StudentList from './StudentList'
import { connect } from 'react-redux'


const FacultyDashboard = (props) => {
    
    const { path } = useRouteMatch()
    console.log(props.faculty)
    
   

    return (

            <div>
                <Navbar signin="/facultysignin" signup="/facultysignup"/>
                    <Switch>
                        <Route exact path={path}><FacultyHome /></Route>
                        <Route path={`${path}/facultysignin`} component={FacultySignIn} />
                        <Route path={path+'/addsubject'} component={AddSubject} />
                        <Route path={path+'/subjectlist'} component={SubjectList} />
                        <Route path={path+'/studentlist'} component={StudentList}  />
                    </Switch>
            </div> 
        )
    
}

const mapStateToProps = (state) => {
    return{
        students:state.faculty.students,
        auth: state.firebase.auth,
        faculty:state.faculty
    }
}



export default connect(mapStateToProps) (FacultyDashboard)