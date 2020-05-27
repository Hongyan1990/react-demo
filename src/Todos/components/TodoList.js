import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todos.js'

const TodoList = ({todos, toggleTodo}) => {
	return (
		<ul>
			{
				todos.map(todo => {
					<Todo {...todo} onClick={() => toggleTodo(todo.id)} />
				})
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
	toggleTodo: PropTypes.func.isRequired
}

export default TodoList
