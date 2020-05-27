import React from 'react'

import VisibleTodoList from '../containers/VisibleTodoList.js'
import Footer from './Footer.js'
import AddTodo from '../containers/AddTodo.js'

const MyTodo = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default MyTodo