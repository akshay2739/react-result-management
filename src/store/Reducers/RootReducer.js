import AuthReducer from './AuthReducer'
import FacultyReducer from './FacultyReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    faculty: FacultyReducer,
    auth: AuthReducer,
    firebase:firebaseReducer
    
})

export default RootReducer