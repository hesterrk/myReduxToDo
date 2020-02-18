import React from 'react';
import { formAction } from './actions/formAction';
import { toDoAction } from './actions/toDoAction';

import { connect } from 'react-redux'



function ToDoForm(props) {

const onSubmit = e => {
    e.preventDefault();
    props.toDoAction({
        newTask: props.inputPropValues  
    })

}

const onChange = e => {
    props.formAction({
        inputName: e.target.name,
        inputValue: e.target.value

    })
}

// console.log(props)

    return (

<div>
{props.todoProps.map(items=> (
    <div>
    {items.item}
    <br>
    </br>
    {items.id}
   </div>
   
))}




<form onSubmit={onSubmit}>
<input
 type="text"
 name="newTask"
//  value={}
 onChange={onChange}
 />

</form> 

<button>Add Task </button>

<br></br>
<br></br>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todoProps: state.toDoReducer.myList,
        //add form reducer here 
        inputPropValues: state.formReducer.newTask
    };
};

export default connect(
    mapStateToProps,
    { toDoAction, formAction }
    )(ToDoForm);