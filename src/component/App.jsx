import React, {useState,} from 'react'
import {DatePicker,} from 'antd'
import loadable from '@loadable/component'
import('antd/dist/antd.min.css')

const LazyFoo = loadable(()=>import('./Foo'))

function App() {
	const [load, setLoad,] = useState(false)
	return <section>
		<DatePicker/>
		<section>
			<button onClick={() => setLoad(true)}>load</button>
			{load?<LazyFoo/>:<div>not load yet</div>}
		</section>
	</section>
}

export default App
