import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AdminHome extends Component {
    render() {
        
        console.log(this.props.auth.uid)
        if(!this.props.auth.uid){
            return(
                <Redirect to="admindashboard/adminsignin" />
            )
        }
        
        return (
            <div>
                <p>Admin Home</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(AdminHome)