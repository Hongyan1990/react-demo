import {connect} from 'react-redux'
import {toggleTodo} from '../../store/actions.js'
import TodoList from '../components/TodoList.js'

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.complate)
		case 'SHOW_COMPLATE':
			return todos.filter(todo => todo.complate)
		case 'SHOW_ALL':
		default:
			return todos
	}
}

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	handleToggleTodo: (id) => {
		dispatch(toggleTodo(id))
	}
})

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList