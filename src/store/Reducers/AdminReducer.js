const initstate = {
    schoolcode:''
}

const AdminReducer = (state=initstate,action) => {
    switch(action.type){
        case 'SIGNUP':
            console.log('signed up')
            return state
        case 'LOGIN':
            console.log('Logged in')
            return state
        default:
            return state
    }
    
}

export default AdminReducer