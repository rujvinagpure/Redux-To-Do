const ADD_TODO ='ADD_TODO'
export const addTodo =() =>({
    type:ADD_TODO,
    message,
    id:Math.random(),
});
// messgae is payload here, payload: message.
const DELETE_TODO ='DELETE_TODO'
export const addTodo =() =>({
    type:DELETE_TODO,
    id,
})