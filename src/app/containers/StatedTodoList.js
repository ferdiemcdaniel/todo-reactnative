import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
    console.log(state);
    return ({
        items: state.todos
    });
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const StatedTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);


export default StatedTodoList;