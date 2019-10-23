import React from 'react'
import PropTypes from 'prop-types'

import './todo-item.css'

const ToDoItem = ({ text, isCompleted, removeTask, completeTask, id }) => (
	<li className="todo-item">
		<i onClick={() => completeTask(id)} >{isCompleted ? 'check' : 'uncheck'} </i>
		<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
		<i onClick={() => removeTask(id)} >&#10005;</i>
	</li>
)

ToDoItem.propTypes = {
	text: PropTypes.string,
	isCompleted: PropTypes.bool,
	removeTask: PropTypes.func,
	id: PropTypes.number,
}

ToDoItem.defaultProps = {
	text: '',
	isCompleted: false,
	removeTask: () => {},
	id: 0
}

export default ToDoItem