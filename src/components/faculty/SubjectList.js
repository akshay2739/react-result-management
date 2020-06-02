import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Subject from './Subject'
import { NavLink } from 'react-router-dom'

class SubjectList extends Component {
    render() {
        
        const subjects = this.props.subjects
        
        return (
            <div>
                {
                    subjects && subjects.map(
                        (subject) => {
                            return(
                                <div key={subject.subjectcode}>
                                    <NavLink key={subject.id} to={'subject/' + subject.subjectcode}>{subject.subjectname}</NavLink>
                                    <br/>
                                </div>
                                
                            )
                        }
                    )
                }
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