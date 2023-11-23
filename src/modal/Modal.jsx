import './Modal.scss';
import { useEffect } from 'react';

export default function Modal({ getOpen }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<>
			<aside className='mask'></aside>
			<aside className='Modal'>
				<button onClick={() => getOpen(false)}>close</button>
			</aside>
		</>
	);
}
