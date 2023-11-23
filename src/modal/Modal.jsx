import { useState } from 'react';
import './Modal.scss';
import { useEffect } from 'react';

export default function Modal({ getOpen }) {
	const [Num, setNum] = useState(0);
	useEffect(() => {
		console.log('mounted');
	}, []);

	return (
		<aside className='Modal'>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
			<button onClick={() => getOpen(false)}>close</button>
			<h1>Modal{Num}</h1>
		</aside>
	);
}
