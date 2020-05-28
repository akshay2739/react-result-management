import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpAction } from '../../store/Actions/AuthAction';
import { Redirect } from 'react-router-dom';

class AdminSignUp extends Component {
    
    state = {
        email:'',
        password:'',
        schoolcode:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {

        if(this.props.auth.uid){
            return(
                <Redirect to="/admindashboard"/>
            )
        }

        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" id="email"className="form-control"  aria-describedby="emailHelp" onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label >School code</label>
                        <input type="text" id="schoolcode" className="form-control" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (credential) => dispatch(signUpAction(credential))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminSignUp);
