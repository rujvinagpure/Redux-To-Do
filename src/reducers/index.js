import {combineReducers} from 'redux';
import todos from './todos';

const rootReducer =combineReducers({
    todos,
})
export default rootReducer;
//here we will import all the reducers, for now we have only
//one reducers todos so we have imported it.