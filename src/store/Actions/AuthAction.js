export const signInAction = (credential) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credential.password
        ).then(
            dispatch({type:'LOGIN'})
        ).catch((err) => {
            dispatch({type:'LOGIN_ERROR'})
        })      
    }
}

export const signOutAction = () => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then(
            dispatch({type:'LOGOUT'})
        ).catch(
            (err) => {
                dispatch({type:'LOGOUT_ERROR'})
            }
        )
    }
}