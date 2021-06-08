import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../actions/index';
const AddToDo = (props) => {
    return (
    <form 
    onSubmit={(event)=> {
        event.preventDefault();
        let input =event.target.userInput.value; 
    props.dispatch(addTodo(input))
    //action dispatched, it willl go into index of actions, then it checks the type, and then goes to reducer(todos)
 
event.target.userInput.value="";
//this will ensure tht the input is blank once we have submitted anything
}

}
  >
<input type="text" name ="userInput"/>
<button>Submit</button>
    </form>
    );
};

export default connect()(AddToDo);
// used coonect to connect with redux
