import React from 'react'
import PropTypes from 'prop-types'

function Books(props) {
	return (
		<ul>
			{
				props.books.map(book => (
					<li key={book.id}>{book.name}</li>
				))
			}
		</ul>
	)
}

export default Books