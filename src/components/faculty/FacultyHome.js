import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class FacultyHome extends Component {
    render() {
        
        if(!this.props.auth.uid){
            return(
                <Redirect to="facultydashboard/facultysignin" />
            )
        }
        
        return (
            <div>
                <p>Faculty home</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default  connect(mapStateToProps) (FacultyHome)
