import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, text, complate}) => {
	return (
		<li
			onClick={onClick}
			style={{
				textDecoration: complate ? 'line-through': 'none'
			}}
		>
			{text}
		</li>
	)
}

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	complate: PropTypes.bool.isRequired
} 

export default Todo

