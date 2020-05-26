import AuthReducer from './AuthReducer'
import FacultyReducer from './FacultyReducer'
import AdminReducer from './AdminReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const RootReducer = combineReducers({
    faculty: FacultyReducer,
    admin : AdminReducer,
    auth: AuthReducer,
    firebase:firebaseReducer,
    firestore: firestoreReducer
    
})

export default RootReducer