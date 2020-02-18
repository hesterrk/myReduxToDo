
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
              //  ...state,
              //   myList: [...state.myList, {item: action.payload}]
              ...state,
                myList: [...state.myList, action.payload]
              
            };
            default: 
            return state
    
    };


  }



