import React, { useState, useEffect, useRef } from 'react';

const Input = ({ inputValue, setInputValue }) => {
	const inputBox = useRef(null);

	useEffect(() => {
		inputBox.current?.focus();
	}, []);

	return (
		<input
			className=' border-2 rounded-2xl p-1 w-80'
			type='text'
			placeholder='Enter here..'
			value={inputValue}
			ref={inputBox}
			onChange={(e) =>
				setInputValue(e.target.value.toLowerCase().trim())
			}
		/>
	);
};

export default Input;
