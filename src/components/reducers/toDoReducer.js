

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
        case 'ADD_ITEM' :
            return state.concat(action.payload)
                // ...state, 
                // myList: [...state.myList, {item: action.payload, completed: false}]
              

            

            default: 
            return state
    
    };


  }