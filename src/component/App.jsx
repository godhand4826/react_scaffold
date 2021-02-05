import React, {useState,} from 'react'
import {DatePicker,} from 'antd'
import('antd/dist/antd.min.css')

function App() {
	const [enable, setEnable,] = useState(true)
	return <div>
		<button onClick={() => setEnable(!enable)}>{enable ? 'on' : 'off'}</button>
		<DatePicker disabled={!enable} />
	</div>
}

export default App
