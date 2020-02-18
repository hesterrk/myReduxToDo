export const toDoAction = ({ item }) => {
    return {
        type: "ADD_NAME", 
        payload: {
           item,
           completed: false,
           id: Date.now()
        }
    }
}