import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

class FacultyHome extends Component {
    render() {
        
        if(!this.props.faculty.loggedIn){
            return(
                <Redirect to="/facultydashboard/facultysignin"/>
            )
        }
        
        return (
            <div>
                <NavLink to="facultydashboard/addsubject" >Add subject </NavLink>
                <br/>
                <NavLink to="facultydashboard/subjectlist" > Subject List </NavLink>
                <br/>
                <NavLink to="facultydashboard/studentlist">Student list</NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        faculty: state.faculty
    }
}

export default  connect(mapStateToProps) (FacultyHome)
