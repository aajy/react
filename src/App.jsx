import { useRef, useState } from 'react';
import './App.scss';
export default function App() {
	console.log('render');
	const box = useRef(null);
	const deg = useRef(45);
	const [Index, setIndex] = useState(0);
	const handleLeft = () => {
		setIndex(Index - 1);
		box.current.style.transform = `rotate(${deg.current * Index}deg)`;
	};
	const handleRight = () => {
		setIndex(Index + 1);
		box.current.style.transform = `rotate(${deg.current * Index}deg)`;
	};
	return (
		<>
			<div className='wrap'>
				<button onClick={handleLeft}>left</button>
				<button onClick={handleRight}>right</button>
				<div className='box' ref={box}></div>
			</div>
		</>
	);
}
