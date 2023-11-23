import { useEffect, useRef } from 'react';
import './App.scss';
export default function App() {
	console.log('render');
	let inputRef = useRef(0);

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<>
			<input type='text' ref={inputRef} />
		</>
	);
}
