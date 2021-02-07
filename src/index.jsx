import React from 'react'
import ReactDOM from 'react-dom'
import Tools from './component/Tools/Tools'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<Router>
		<Tools />
	</Router>,
	document.getElementById('root')
)
