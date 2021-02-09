import React, {useState}from 'react'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'
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
					<CopyToClipboard text={before}>
						<CopyOutlined />
					</CopyToClipboard>
				</Col>
				<Col flex={12}>
					Encoded
					<CopyToClipboard text={after}>
						<CopyOutlined />
					</CopyToClipboard>
				</Col>
			</Row>
			<Row>
				<Col flex={12}>
					<TextArea
						autoSize
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
						autoSize
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