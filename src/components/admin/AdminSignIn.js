import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInAction } from '../../store/Actions/AuthAction'
import { Redirect } from 'react-router-dom';

class AdminSignIn extends Component {
    
    state = {
        email:'',
        password:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }


    render() {
        if(this.props.auth.uid){
            return(
                <Redirect to="/admindashboard" />
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
        signIn : (creds) => dispatch(signInAction(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminSignIn)
