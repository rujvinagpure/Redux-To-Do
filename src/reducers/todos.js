const initialState ={
    data:[],
};
const todos = (state =initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                data:[
                    ...state.data,
                    {
                        message: action.message,
                        id:action.id,
                    },
                ],
            };
            case "DELETE_TODO":
                const todos= state.data.filter((todo)=>todo.id !==action.id);
// it will delete only the selected todo and will leave everything as it is (action.id part)
                return{
                    ...state,
                    data:todos,
                };
                default:
                    return state;
    }
};
export default todos;

//type is in actions: index.js