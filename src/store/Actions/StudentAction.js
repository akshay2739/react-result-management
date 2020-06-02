export const studentSignInAction = (creds) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('admins')
            .where("schoolcode","==",creds.schoolcode)
            .get()
            .then( (querySnapshot) =>  {
                querySnapshot.forEach( (doc) => {
                    console.log(doc.id, " => ", doc.data());
                    const schoolcode = doc.id
                    console.log(schoolcode)

                    firestore.collection('admins').doc(schoolcode).collection('students').get()
                        .then( (querySnapshot) => {
                            querySnapshot.forEach( (doc) => {
                               // console.log(doc.id,doc.data().email,doc.data().password)
                                if(doc.id === creds.email){
                                    if(doc.data().password === creds.password){
                                        console.log('password matched')
                                        dispatch({type:'STUDENT_SIGNIN_SUCCESS',loggedIn:true,adminId:schoolcode,studentId:doc.id})
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