import React from 'react';
import { toDoAction } from './actions/toDoAction';
import { connect } from 'react-redux'



function ToDoForm(props) {





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




{/* <form onSubmit={}>
<input
 type="text"
 name="newTask"
 value={}
 onChange={}
 />

</form> */}
<button>Add Task </button>



<br></br>
<br></br>




        </div>
    )
}

const mapStateToProps = state => {
    return {
        todoProps: state.toDoReducer.myList
    };
};

export default connect(
    mapStateToProps,
    { toDoAction }
    )(ToDoForm);