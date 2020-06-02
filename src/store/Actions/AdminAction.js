export const addFacultyAction = (creds,uid) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        
        const firestore = getFirestore()
        firestore.collection('admins').doc(uid).collection('faculties').doc(creds.email).set(
            {
                email:creds.email,
                password:creds.password
            }
        ).then(
            () => {
                console.log('faculty added')
                firestore.collection('faculties').doc(creds.email).set({
                    
                })
                //console.log('faculty added',docRef.id)
            }
        ).then(
            console.log('faculti created')
        )      
        
       // console.log(uid)
    }
}

export const addStudentAction = (creds, uid) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('admins').doc(uid).collection('students').doc(creds.idno).set(
            {
                idno:creds.idno,
                password:creds.password,
                year:creds.year,
                branch:creds.branch
            }
        )
        .then(
            console.log('student added')
        )
        .catch(
            (err) => console.log('error')
        )
    }
}