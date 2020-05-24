import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class StudentHome extends Component {
    render() {
        
        if(!this.props.auth.uid){
            return(
                <Redirect to="/studentdashboard/studentsignin"/>
            )
        }
        
        return (
            <div>
                <p>Student home</p>
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
