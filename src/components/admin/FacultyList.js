import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Faculty from './Faculty'
import * as firebase from 'firebase'
class FacultyList extends Component {
    teachers = []
    
    componentDidMount(){
        firebase.firestore().collection('admins').doc('ibm1IBoUnN9PI66txt4I').get()
        .then(
            (doc) => {
             // console.log( doc.data().teachers)
             for(var i=0;i<doc.data().teachers.length;i++){
                this.teachers.push(doc.data().teachers[i])
             }
              
              
            }
        )
    }

    render() {
        const admins = this.props.admins
        
        console.log(admins)
        return (
            <div>
                {
                    admins && admins.map(
                        (admin) => {
                            return(
                                <Faculty key={admin.name} faculty={admin} />
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
        admins:state.firestore.ordered.faculti
    }
}

export default compose(
    firestoreConnect([
        {
            collection:'admins',
            doc:'PrssE3dsj86j1nm9V9OX',
            subcollections:[{collection:'faculties'}],
            storeAs:'faculti'
        
    },
    ]),connect(mapStateToProps)
    )(FacultyList)