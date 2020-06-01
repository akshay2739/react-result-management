import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

class StudentList extends Component {
    
    render() {
        console.log(this.props.students)
        return (
            <div>
                <p>Student List</p>
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
