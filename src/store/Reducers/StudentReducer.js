const initState = {
    loggedIn:false,
    studentId:''
}

const  StudentReducer = (state=initState , action) => {
    switch(action.type){
        case 'STUDENT_SIGNIN_SUCCESS':
            console.log('signed in')
            return{
                ...state,
                loggedIn:action.loggedIn,
                studentId:action.studentId
            }
        default:
            return state
    }
}

export default StudentReducer