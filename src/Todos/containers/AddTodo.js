import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../../store/actions.js'

let input

let AddTodo = ({dispatch}) => (
	<form onSubmit={
		e => {
			e.preventDefault()
			if(!input.value.trim()) {
				return
			}
			dispatch(addTodo(input.value))
			input.value = ''
		}
	}>
		<input ref={node => {
			input = node
		}} />
		<button
			type="submit"
		>add todo</button>
	</form>
)

AddTodo = connect()(AddTodo)
export default AddTodo

