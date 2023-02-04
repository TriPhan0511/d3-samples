import React, { useRef, useState } from 'react'

const LogButtonClicks = () => {
	const [count, setCount] = useState(0)

	const handle = () => {
		setCount(count + 1)
		console.log(`Clicked ${count} times.`)
	}

	console.log('I rendered!')

	return <button onClick={handle}>Click me</button>
}

// const LogButtonClicks = () => {
// 	const ref = useRef(0)

// 	const handle = () => {
// 		ref.current++
// 		console.log(`Clicked ${ref.current} times.`)
// 	}

// 	console.log('I rendered!')

// 	return <button onClick={handle}>Click me</button>
// }

export default LogButtonClicks
