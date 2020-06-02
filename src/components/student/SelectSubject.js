import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default class SelectSubject extends Component {
    render() {
        return (
            <div>
                <p>Select Subject</p>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

// export default compose(
//     connect(),
//     firestoreConnect(
//         props => {
//             return [
//                 collections:''
//             ]
//         }
//     )
//     )