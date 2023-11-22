import { useState } from 'react';
import './App.scss';
export default function App() {
	console.log('render');
	const [Index, setIndex] = useState(0);

	return (
		<>
			<button onClick={() => setIndex(Index - 1)}>left</button>
			<button onClick={() => setIndex(Index + 1)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
