import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { studentSignInAction } from '../../store/Actions/StudentAction'
import { Redirect } from 'react-router-dom';




class StudentSignIn extends Component{

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
        e.preventDefault()
        this.props.signin(this.state)
    }

    render(){

        if(this.props.student.loggedIn){
            return(
                <Redirect to="/studentdashboard" />
            )
        }

        //console.log(this.props.student.loggedIn)

        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit={this.handleSubmit} >
                    
                    <div className="form-group">
                        <label >School Code</label>
                        <input type="text" className="form-control" id="schoolcode" aria-describedby="emailHelp" onChange={this.handleChange} />  
                    </div>

                    <div className="form-group">
                        <label >Email address</label>
                        <input type="text" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} />  
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
        auth:state.firebase.auth,
        student:state.student
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signin: (credentials) => dispatch(studentSignInAction(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (StudentSignIn)
