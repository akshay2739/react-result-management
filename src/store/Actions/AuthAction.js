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

export const signUpAction = (credential) => {
    return(dispatch,getstate,{getFirebase,getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            credential.email,
            credential.password
        ).then(
            (resp) => {
                firestore.collection('admins').doc(resp.user.uid).set({
                    schoolcode:credential.schoolcode
                })
            }
        ).then(
            dispatch({type:'SIGNUP'})
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }
}