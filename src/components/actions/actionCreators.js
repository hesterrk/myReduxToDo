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

export const markCompleted = (id) => {
    return {
    type: types.MARK_COMPLETED,
    payload: id
    }
}

export const clearCompleted = (id) => {
    return {
        type: types.CLEAR_COMPLETED,
        payload: id
    }
}