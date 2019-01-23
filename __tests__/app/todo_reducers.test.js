import reducer from '../../src/app/reducers'
import * as types from '../../src/app/constants/ActionTypes'


describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({todos: []})
    })

    it('should handle ADD_TODO', () => {
        expect(
            reducer({}, {
                type:types.ADD_TODO,
                text: 'Run the tests'
            })
        ).toEqual({todos:[
            {
                title: 'Run the tests',
                done: false,
                id: 0
            }
        ]})       

        expect(
            reducer(
                {
                    todos: [{
                        title: 'Use Redux',
                        done: false,
                        id: 0
                    }]
                },{
                    type: types.ADD_TODO,
                    text: 'Run the tests'
                }
            )
        ).toEqual({
            todos:[{
                title: 'Run the tests',
                done: false,
                id: 1
            },{
                title: 'Use Redux',
                done: false,
                id:0
            }
        ]})
    })
})