
import * as types from '../actions/actionTypes';

 const initialState = {
  
    myList : [
      {
    item: 'Learn about reducers',
    completed: false,
     id: 3892987589
  
   },
   {
    item: 'React',
    completed: true,
     id: 3862987589
  
   }
 ]
 
  }

  
  export const toDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_NAME :
            return {
             
               ...state,
                myList: [...state.myList, action.payload]
              
            };

            case types.MARK_COMPLETED : 
    
            return {
              ...state, 
              myList: state.myList.map(item => {
                if(item.id === action.payload) {
                  return {
                    ...item,
                    completed: !item.completed
                  };
                }
                return item
              })
            }

            case types.CLEAR_COMPLETED :
              return {
                ...state,
                myList: state.myList.filter(item => 
                  !item.completed)
              }


            default: 
            return state
    
    };


  }



