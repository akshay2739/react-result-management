const initState = {
    loggedIn : false,
    adminId:'',
    facultyId:''
}

const FacultyReducer = (state = initState , action) => {
    switch(action.type){
        
        case 'SIGNIN_SUCCESS':
            console.log('Signed in')
            return{
                ...state,
                loggedIn:action.loggedin,
                adminId:action.adminId,
                facultyId:action.facultyId
            }
        default:
            return state
    }
}

export default FacultyReducer