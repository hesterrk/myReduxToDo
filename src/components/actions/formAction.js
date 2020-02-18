// export const formAction

export const formAction = ({inputName, inputValue}) => {
    return {
        type: 'INPUT_CHANGE', 
        payload: {
            inputName,
            inputValue
        }
    }
    
}