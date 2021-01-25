export const createPost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            userFirstName: profile.firstName,
            userLastName: profile.lastName,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post});
        }).catch((err) => {
            dispatch({type: 'CREATE_POST ERROR', err });
        })
        
    };
};