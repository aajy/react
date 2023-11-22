import { useEffect, useState } from 'react';
import './App.scss';
import Modal from './Modal';
export default function App() {
	const [Open, setOpen] = useState(false);

	return (
		<>
			<div className='wrap'>
				<button onClick={() => setOpen(!Open)}>{Open ? '팝업닫기' : '팝업열기'}</button>
				{Open && <Modal />}
			</div>
		</>
	);
}
