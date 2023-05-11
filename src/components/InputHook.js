import * as React from 'react';

const { useState } = React;

// 自定义hook：解决逻辑复用
const useInputHook = () => {
	const [value, setValue] = useState('');
	const onChange = (e) => {
		setValue(e.target.value);
	}

	return {
		value,
		onChange
	};
}

function InputHookComp() {
	// const [text, setText] = useState('');
	// const textChangeHandler = (e) => {
	// 	console.log(e.target.value);
	// 	setText(e.target.value);
	// }
	//
	// const [password, setPassword] = useState('');
	//
	// const passwordChangeHandler = (e) => {
	// 	console.log(e.target.value);
	// 	setPassword(e.target.value);
	// }
	//
	// const str = text ? `, ${text}` : '';

	const textInputInfo = useInputHook();
	const passwordInputInfo = useInputHook();

	return (
		<div>
			name: <input type="text" {...textInputInfo}/>
			<br/>
			password: <input type="password" {...passwordInputInfo}/>
			{/*<h3>hello{str}</h3>*/}
		</div>

	);
}

export default InputHookComp;