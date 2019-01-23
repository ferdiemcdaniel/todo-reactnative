import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoList from '../../../src/app/components/TodoList'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        addTodo: jest.fn()
    }

    const enzymeWrapper = shallow(<TodoList {...props} />)

    return{
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('TodoList', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)
        })
    })
})