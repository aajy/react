import { useState } from 'react';
import Modal from './modal/Modal';

export default function App() {
	const [IsOpen, setIsOpen] = useState();

	return (
		<>
			<h1>부모 컴포넌트</h1>
			<button onClick={() => setIsOpen(!IsOpen)}>{IsOpen ? '모달 닫기' : '모달 열기'}</button>
			{IsOpen && <Modal />}
		</>
	);
}
