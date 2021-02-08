import React from 'react'
import Transcode from './Transcode'

function Html(){
	return <Transcode
		encode={htmlEncode}
		decode={htmlDecode}
	/>
}

function htmlEncode(s){
	let div = document.createElement('div')
	div.appendChild(document.createTextNode(s))
	return div.innerHTML
}

function htmlDecode(s){
	let div = document.createElement('div')
	div.innerHTML = s
	return div.innerText || div.textContent
}

export default Html