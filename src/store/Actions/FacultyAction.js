export const facultySignIn = (creds) => {

    return (dispatch,getState,{getFirebase, getFirestore}) => {
        //const firebase = getFirebase()
        const firestore = getFirestore()
        //console.log(creds)
        firestore.collection('admins')
            .where("schoolcode","==",creds.schoolcode)
            .get()
            .then( (querySnapshot) =>  {
                querySnapshot.forEach( (doc) => {
                    console.log(doc.id, " => ", doc.data());
                    const schoolcode = doc.id
                    console.log(schoolcode)

                    firestore.collection('admins').doc(schoolcode).collection('faculties').get()
                        .then( (querySnapshot) => {
                            querySnapshot.forEach( (doc) => {
                                console.log(doc.id,doc.data().email,doc.data().password)
                                if(doc.id === creds.email){
                                    if(doc.data().password === creds.password){
                                        console.log('password matched')
                                        dispatch({type:'SIGNIN_SUCCESS',loggedin:true})
                                    }
                                    else{
                                        console.log('No match')
                                    }
                                }
                            })
                        })
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            })
    }
}

// export const addSubject = (creds) => {
//     (dispatch,getState,{getFirestore}) => {
//         const firestore = getFirestore()

//         //firestore.collection()
//     }
// }