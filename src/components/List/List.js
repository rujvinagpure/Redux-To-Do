import React from 'react'
import {connect} from 'react-redux';
const List = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) =>(
                <li key={index}>{todo.message} </li>
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
