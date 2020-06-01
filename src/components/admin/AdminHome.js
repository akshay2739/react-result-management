import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'


class AdminHome extends Component {
    
    
    render() {    
        if(!this.props.auth.uid){
            return(
                <Redirect to="admindashboard/adminsignin" />
            )
        }
       
        return (
            <div>
                <p>Admin Home</p>
                <NavLink to="admindashboard/facultylist">Facilty list</NavLink>
                <br/>
                <NavLink to="admindashboard/addfaculty">Add faculty</NavLink>
                <br/>
                <NavLink to="admindashboard/addstudent">Add student</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth,
        profile:state.firebase.profile,
        admin:state.admin
    }
}

export default connect(mapStateToProps)(AdminHome)