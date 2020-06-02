import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Student from './Student'

class StudentList extends Component {
    
    render() {
        const students = this.props.students
        
        return (
            <div>
                {
                    students && students.map(
                        (student) => {
                            return(
                                <div>
                                    <Student key={student.idno} student={student}/>
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
        students:state.firestore.ordered.faculties,
        adminId:state.faculty.adminId
    }
}

export default compose(connect(mapStateToProps),
firestoreConnect(
    props => {
        return [
            {
                collection:'admins',
                doc:props.adminId,
                subcollections:[{collection:'students'}],   
                storeAs:'faculties'

            }
        ]
    }
))(StudentList)
