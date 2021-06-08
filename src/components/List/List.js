import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions';
const List = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) =>(
                <li key={index}>{todo.message} 
                <button onClick ={() => props.dispatch(deleteTodo(todo.id))}>Delete
                </button>
                </li>
            ))}
        </ul>
    );
};
// to access state , todos: props name can be anything
const mapStateToProps =(state) => ({
    todos: state.todos.data,
    //thispath we have taken from the redux 
});

export default connect(mapStateToProps)(List);
