const ADD_TODO ="ADD_TODO"
export const addTodo =(message) =>({
    type:ADD_TODO,
    message,
    id:Math.random(),
});
// messgae is payload here, payload: message.
const DELETE_TODO ="DELETE_TODO"
export const deleteTodo =(id) =>({
    type:DELETE_TODO,
    id,
});