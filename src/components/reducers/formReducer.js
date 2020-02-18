const initialState = {

    newTask: ''

}

export const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INPUT_CHANGE' :
            return {
                ...state,
                [action.payload.inputName] : action.payload.inputValue

            };

            default:

                return state
    };

  }