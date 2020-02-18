// Import all my reducers here 
import { toDoReducer } from './toDoReducer';
import { formReducer } from './formReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    toDoReducer,
    formReducer
   
});
