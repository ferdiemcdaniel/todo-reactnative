import { combineReducers } from 'redux';
import {
    ADD_TODO,
    DONE_TODO
} from './constants/ActionTypes';


function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    done: false,
                    title: action.text
                },
                ...state
            ]
        case DONE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, completed: !todo.completed} :
                    todo
            )
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos
})

export default rootReducer;