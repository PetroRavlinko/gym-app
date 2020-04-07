export const createWorkout = (workout) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('workouts').add({
            ...workout,
            authroFirstName: 'John',
            authorLastName: 'Doe',
            authorId: 424242,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_WORKOUT', workout})
    }).catch((err) => {
        dispatch({type: 'CREATE_WORKOUT_ERROR', err})
    })
    }
}