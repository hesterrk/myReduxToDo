import * as types from './actionTypes';

export const formAction = ({inputName, inputValue}) => {
    return {
        type: types.INPUT_CHANGE, 
        payload: {
            inputName,
            inputValue
        }
    }
    
}


export const toDoAction = ({ item }) => {
    return {
        type: types.ADD_NAME, 
        payload: {
           item,
           completed: false,
           id: Date.now()
        }
    }
}