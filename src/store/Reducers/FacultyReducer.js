const initstate = {
    loggedIn : false
}

const FacultyReducer = (state = initstate , action) => {
    switch(action.type){
        
        case 'SIGNIN_SUCCESS':
            console.log('Signed in')
            return{
                ...state,
                loggedIn:action.loggedin
            }
        default:
            return state
    }
}

export default FacultyReducer