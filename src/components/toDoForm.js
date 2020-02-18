import React from 'react';
import { formAction, toDoAction, markCompleted, clearCompleted } from './actions/actionCreators';

import { connect } from 'react-redux'


function ToDoForm(props) {



const onSubmit = e => {
    e.preventDefault();
    props.toDoAction({
        item: props.inputPropValues.newTask,
       
     } )

}



const onChange = e => {
    props.formAction({
        inputName: e.target.name,
        inputValue: e.target.value

    })
}

const onMarkCompleted = id => {
    props.markCompleted(id)
}

const onClearCompleted = id => {
    props.clearCompleted(id)
}





    return (

<div>
    <h3>Tasks:</h3>
{props.todoProps.map(items=> (
    <div>
    {items.item}

    
    <br>
    </br>
    <button onClick={() => onMarkCompleted(items.id)}>Completed?</button>

    <button onClick={() => onClearCompleted(items.id)}>Clear Completed</button>

   </div>
   
))}




<form onSubmit={onSubmit} >
<input
 type="text"
 value={props.inputPropValues.newTask}
 onChange={onChange}
 name="newTask"

 />

<button type="submit">Add Task </button>


</form> 


<br></br>
<br></br>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todoProps: state.toDoReducer.myList,
        //add form reducer here 
        inputPropValues: state.formReducer
    };
};

export default connect(
    mapStateToProps,
    { toDoAction, formAction, markCompleted, clearCompleted }
    )(ToDoForm);