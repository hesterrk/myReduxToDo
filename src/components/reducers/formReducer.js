import * as types from '../actions/actionTypes';


const initialState = {

    newTask: ''
   

}

export const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.INPUT_CHANGE :
            return {
                ...state,
                [action.payload.inputName] : action.payload.inputValue

            };

            case types.ADD_NAME :
                return initialState

            default:

                return state
    };

  }