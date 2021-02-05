import React, {useState,} from 'react'
import loadable from '@loadable/component'
import {DatePicker, Button,} from 'antd'
import 'antd/dist/antd.min.css'

const LazyFoo = loadable(()=>import('./Foo'))

function App() {
	const [loaded, setLoaded,] = useState(false)
	return <section>
		<DatePicker/>
		<section>
			<Button onClick={() => setLoaded(true)}>{
				loaded?<LazyFoo/>:'load'
			}</Button>
		</section>
	</section>
}

export default App
