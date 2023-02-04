import React, { useEffect, useRef } from 'react'

const AccessingElement = () => {
	const elementRef = useRef()

	useEffect(() => {
		console.log(elementRef.current) // <div>I'm an element!</div>
	}, [])

	return <div ref={elementRef}>I'm an element!</div>
}

export default AccessingElement
