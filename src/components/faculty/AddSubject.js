import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSubjectAction } from '../../store/Actions/FacultyAction'

class AddSubject extends Component {
    
    state = {
        subjectcode:'',
        subjectname:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addsubject(this.state,this.props.adminId,this.props.facultyId)
        // console.log(this.state)
    }
    
    render() {
        console.log(this.props.facultyId)
        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
            <form className="p-1 w-50 " onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <label >Subject code code</label>
                    <input type="text" className="form-control" id="subjectcode" aria-describedby="emailHelp" onChange={this.handleChange}/>
                    
                </div>
                <div className="form-group">
                    <label >Subject Name</label>
                    <input type="text" className="form-control" id="subjectname" aria-describedby="emailHelp" onChange={this.handleChange}/>
                    
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        facultyId:state.faculty.facultyId,
        adminId:state.faculty.adminId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addsubject: (creds,adminId,facultyId) => dispatch(addSubjectAction(creds,adminId,facultyId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddSubject)