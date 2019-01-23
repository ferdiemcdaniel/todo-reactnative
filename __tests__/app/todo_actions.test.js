import * as types from '../../src/app/constants/ActionTypes';
import * as actions from '../../src/app/actions.js';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs'
        const expectedAction = {
            type: types.ADD_TODO,
            text
        }
        expect(actions.addTodo(text)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to complete a todo', () => {
        const id = 1
        const expectedAction = {
            type: types.COMPLETE_TODO,
            id
        }
        expect(actions.completeTodo(id)).toEqual(expectedAction)
    })
})