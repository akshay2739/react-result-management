import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class SubjectList extends Component {
    render() {
        
        console.log(this.props.subjects)
        
        return (
            <div>
                <p>Subject List</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        facultyId : state.faculty.facultyId,
        subjects : state.firestore.ordered.subjects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        props => {
            return [
                {
                    collection:'faculties',
                    doc:props.facultyId,
                    subcollections:[{collection:'subjects'}],
                    storeAs:'subjects'
                }
            ]
        }
    )
)(SubjectList)