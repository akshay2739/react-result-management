export const addFacultyAction = (creds,uid) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firestore.collection('admins').doc(uid).collection('faculties').add(
            {
                email:creds.email,
                password:creds.password
            }
        ).then(
            (docRef) => {
                console.log('faculty added')
                firestore.collection('faaculties').doc(docRef.id).set({

                })
                //console.log('faculty added',docRef.id)
            }
        ).then(
            console.log('faculti created')
        )      
        
       // console.log(uid)
    }
}