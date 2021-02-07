import React from 'react'
import {
	Link,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom'
import { Badge, Breadcrumb  } from 'antd'
import 'antd/dist/antd.min.css'
import './Tools.css'

const breadcrumbNameMap = {
	'/base64': 'Base64',
	'/url': 'URL',
	'/json': 'JSON',
	'/html': 'HTML',
}

function Tools(){
	const location = useLocation()
	const pathSnippets = location.pathname.split('/').filter(i => i)
	const extraBreadcrumbItems = pathSnippets.map((_,index)=>{
		const url = `/${pathSnippets.slice(0,index+1).join('/')}`
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>{breadcrumbNameMap[url]}</Link>
			</Breadcrumb.Item>
		)
	})
	const breadcrumbItems = [
		<Breadcrumb.Item key="home">
			<Link to="/">Home</Link>
		</Breadcrumb.Item>,
		...extraBreadcrumbItems,
	]
	return (
		<div className="demo">
			<div className="demo-nav">
				<Breadcrumb>{breadcrumbItems}</Breadcrumb>
			</div>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/base64" component={()=><div>Base64 Encode/Decode</div>}/>
				<Route path="/url" component={()=><div>URL Encode/Decode</div>}/>
				<Route path="/html" component={()=><div>HTML Encode/Decode</div>}/>
				<Route path="/json" component={()=><div>JSON Formatter</div>}/>
			</Switch>
		</div>
	)
}


function Home (){
	return (
		<>
			<div>
				<Badge color='pink' text={ <Link to='/base64'>Base64 Encode/Decode</Link>}/>
			</div>
			<div>
				<Badge color='red' text={ <Link to='/url'>URL Encode/Decode</Link>}/>
			</div>
			<div>
				<Badge color='yellow' text={ <Link to='/html'>HTML Encode/Decode</Link>}/>
			</div>
			<div>
				<Badge color='orange' text={ <Link to='/json'>JSON Formatter</Link>}/>
			</div>
		</>
	)
}

export default Tools
