import React, { useState } from 'react';
import { formAction, toDoAction } from './actions/actionCreators';

import { connect } from 'react-redux'


function ToDoForm(props) {

    // const [newText, setNewText] = useState('')


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

    return (

<div>
    <h3>Tasks:</h3>
{props.todoProps.map(items=> (
    <div>
    {items.item}
    <br>
    </br>

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
    { toDoAction, formAction }
    )(ToDoForm);