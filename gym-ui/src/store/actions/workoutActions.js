export const worckoutCreate = (workout) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_WORKOUT', workout})
    }
}