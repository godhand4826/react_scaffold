import React, {useState}from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Input}  from 'antd'
import {CopyOutlined} from '@ant-design/icons'
const {TextArea} = Input

Transcode.propTypes={
	encode: PropTypes.func.isRequired,
	decode: PropTypes.func.isRequired,
}

function Transcode(props){
	const {encode, decode} = props
	let [before, setBefore] = useState('')
	let [after, setAfter] = useState('')
	return (
		<>
			<Row>
				<Col flex={12}>
					Decoded
					<CopyOutlined />
				</Col>
				<Col flex={12}>
					Encoded
					<CopyOutlined />
				</Col>
			</Row>
			<Row>
				<Col flex={12}>
					<TextArea
						autoFocus={true}
						placeholder='type (or paste) here...'
						rows={4}
						value={before}
						onChange={
							event=>{
								const text = event.target.value
								setBefore(text)
								setAfter(encode(text))
							}
						}
					/>
				</Col>
				<Col flex={12}>
					<TextArea
						placeholder='result goes here...'
						rows={4}
						value={after}
						onChange={
							event=>{
								const text = event.target.value
								setAfter(text)
								setBefore(decode(text))
							}
						}
					/>
				</Col>
			</Row>
		</>
	)
}

export default Transcode