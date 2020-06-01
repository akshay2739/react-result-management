import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Faculty from './Faculty'
class FacultyList extends Component {
    

    render() {
       const faculties = this.props.faculties
        
        //console.log(this.props.faculties)
        return (
            <div>
                {
                    faculties && faculties.map(
                        (faculty) => {
                            return(
                                <Faculty key={faculty.email} faculty={faculty} />
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
        auth: state.firebase.auth,
        faculties:state.firestore.ordered.faculties,
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        props => {
            
            return [
                {
                    collection:'admins',
                    doc:props.auth.uid,
                    subcollections:[{collection:'faculties'}],
                    storeAs:'faculties'
            },
            ]
        }
    )
    )(FacultyList)