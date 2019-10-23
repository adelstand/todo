import React, { Component, Fragment } from 'react'

import ToDo from './containers/todo/todo'
import Title from './components/title/title'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Title title='ToDo App' />
				<ToDo />
			</Fragment>
		)
	}
}
