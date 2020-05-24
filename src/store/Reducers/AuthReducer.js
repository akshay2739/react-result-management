const initState = {
    auth:'hello'
}

const AuthReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN':
            console.log('logged in')
            return state
        case 'LOGIN_ERROR':
            console.log('login error')
            return state  
        case 'LOGOUT':
            console.log('Logged out')
            return state
        case 'LOGOUT_ERROR':
            console.log('logged out')  
            return state            
        default:
            return state

    }
}

export default AuthReducer