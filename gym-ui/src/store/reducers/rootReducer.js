import authReducer from './authReducer'
import workoutReducer from './workoutReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    workout: workoutReducer,
    firestore: firestoreReducer
});

export default rootReducer 