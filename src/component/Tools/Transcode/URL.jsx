import React from 'react'
import Transcode from './Transcode'

function URL(){
	return <Transcode
		encode={encodeURIComponent}
		decode={decodeURIComponent}
	/>
}

export default URL