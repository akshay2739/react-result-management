import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

class StudentHome extends Component {
    render() {
        
        
        return (
            <div>
                <NavLink to="/studentdashboard/selectsubject"  >Select Subject</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(StudentHome)
