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
import Base64 from './Transcode/Base64'
import Url from './Transcode/URL'
import Html from './Transcode/Html'
import Json from './Transcode/Json'


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
				<Route path="/base64" component={Base64}/>
				<Route path="/url" component={Url}/>
				<Route path="/html" component={Html}/>
				<Route path="/json" component={Json}/>
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
