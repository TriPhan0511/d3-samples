import React, { useEffect, useRef } from 'react'

const InputFocus = () => {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])


	return (
		<>
			<form>
				<input ref={inputRef} type='text' />
				<br />
				<button>Submit</button>
			</form>
		</>
	)
}

export default InputFocus
