import React from 'react'
import PropTypes from 'prop-types'

import './todo-input.css'

const ToDoInput = ({ value, onChange, onKeyPress }) => (
	<label className="todo-input-wrapper">
		<span>+</span>
		<input
			type="text"
			className="todo-input"
			placeholder='Click to add task'
			onChange={onChange}
			onKeyPress={onKeyPress}
			value={value}
		/>
	</label>
)

ToDoInput.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	value: PropTypes.string,
}

ToDoInput.defaultProps = {
	onChange: () => {},
	onKeyPress: () => {},
	value: 'Click to add task',
}

export default ToDoInput