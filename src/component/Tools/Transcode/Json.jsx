import React from 'react'
import Transcode from './Transcode'

function Json(){
	return <Transcode
		encode={str =>
			JSON.stringify(JSON.parse(str),null,'\t')
		}
		decode={str => str}
	/>
}
export default Json