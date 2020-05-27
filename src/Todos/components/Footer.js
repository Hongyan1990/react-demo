import React from 'react'
import FilterLink from '../containers/FilterLink.js'

const Footer = () => (
	<p>
		{'Show: '}
		<FilterLink filter="SHOW_ALL">
			ALl
		</FilterLink>
		<FilterLink filter="SHOW_ACTIVE">
			ACTIVE
		</FilterLink>
		<FilterLink filter="SHOW_COMPLATE">
			COMPLATE
		</FilterLink>
	</p>
)

export default Footer
