import React from 'react'
import PropTypes from 'prop-types'

function Picker(props) {
	const {selected, onChange, options} = props
	return (
		<select value={selected}
				onChange={e => onChange(e.target.value)}
				style={{padding: '0px 10px'}}>
			{
				options.map(v => (
					<option key={v.value} value={v.value}>{v.name}</option>
				))
			}
		</select>
	)
}

export default Picker