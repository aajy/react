import { useRef, useState } from 'react';
import './App.scss';
export default function App() {
	console.log('render');
	const [Num2, setNum2] = useState(0);
	let num1 = useRef(0);
	const handleClick = () => {
		num1.current++;
		setNum2(Num2 + 1);
		console.log('num1', num1.current);
		console.log('num2', Num2);
	};
	return (
		<>
			<button onClick={handleClick}>버튼</button>
		</>
	);
}
