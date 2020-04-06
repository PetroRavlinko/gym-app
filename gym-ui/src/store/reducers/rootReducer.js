import authReducer from './authReducer'
import workoutReducer from './workoutReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    workout: workoutReducer
});

export default rootReducer 