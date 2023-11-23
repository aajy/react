import { useRef } from 'react';
import './App.scss';
export default function App() {
	console.log('render');
	const num = useRef(0);
	const refBox = useRef(null);

	const minus = () => {
		num.current--;
		refBox.current.style.transform = `rotate(${num.current * 45}deg)`;
		console.log('minus', num.current);
	};
	const plus = () => {
		num.current++;
		refBox.current.style.transform = `rotate(${num.current * 45}deg)`;
		console.log('plus', num.current);
	};
	return (
		<>
			<button onClick={minus}>left</button>
			<button onClick={plus}>right</button>

			<div className='box' ref={refBox}>
				{num.current}
			</div>
		</>
	);
}
