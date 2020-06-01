import React, { Component } from 'react'
import {addStudentAction} from '../../store/Actions/AdminAction'
import { connect } from 'react-redux'

class AddStudents extends Component {
    
    state = {
        idno:'',
        password:'',
        year:'',
        branch:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.addstudent(this.state,this.props.auth.auth.uid)
    }
    
    
    render() {
        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                        <label >ID NO</label>
                        <input type="text" id="idno"className="form-control"  aria-describedby="emailHelp" onChange={this.handleChange}/>
                        
                    </div>
                   
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label >Year</label>
                        <select id="year" className="form-control" onChange={this.handleChange}>
                            <option  defaultValue>Select year</option>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label >Branch</label>
                        <select id="branch" className="form-control" onChange={this.handleChange}>
                            <option  defaultValue>Select Branch</option>
                            <option value="IT" defaultValue>IT</option>
                            <option value="EC">EC</option>
                            <option value="CP">CP</option>
                            <option value="EE">EE</option>
                            <option value="ME">ME</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addstudent : (creds,uid) => dispatch(addStudentAction(creds,uid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddStudents)