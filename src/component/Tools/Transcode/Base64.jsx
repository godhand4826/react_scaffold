import React from 'react'
import Transcode from './Transcode'

function Base64(){
	return <Transcode
		encode={btoa}
		decode={atob}
	/>
}

export default Base64