import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

const TodoList = ({todos, handleToggleTodo}) => {
	return (
		<ul>
			{
				todos.map(todo => (
					<Todo key={todo.id} {...todo} onClick={() => handleToggleTodo(todo.id)} />
				))
			}
		</ul>
	)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			complate:PropTypes.bool.isRequired
		})
	),
	handleToggleTodo: PropTypes.func.isRequired
}

export default TodoList
