import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFacultyAction } from '../../store/Actions/AdminAction'

class AddFaculty extends Component {
    
    state = {
        email:'',
        password:'',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.props)
        //console.log(this.props.auth.uid)
        this.props.addfaculty(this.state,this.props.auth.uid)
    }
    
    render() {
        //console.log(this.props.profile)
        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label > Faculty Email address</label>
                        <input type="email" id="email"className="form-control"  aria-describedby="emailHelp" onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Faculty Password</label>
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
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addfaculty: (creds,uid) => dispatch(addFacultyAction(creds,uid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddFaculty)
