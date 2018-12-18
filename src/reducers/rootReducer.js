import { combineReducers } from 'redux';
import experienceReducer from './experienceReducer'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    experiences: experienceReducer,
    firestore: firestoreReducer
});

export default rootReducer
