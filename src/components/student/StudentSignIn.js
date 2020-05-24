import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { signInAction } from '../../store/Actions/AuthAction'
import { Redirect } from 'react-router-dom';




class StudentSignIn extends Component{

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
        e.preventDefault()
        this.props.signin(this.state)
    }

    render(){

        if(this.props.auth.uid){
            return(
                <Redirect to="/studentdashboard" />
            )
        }

        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} />
                        
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} />
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
    return{
        signin: (credentials) => {dispatch(signInAction(credentials))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (StudentSignIn)
