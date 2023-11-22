import { useState } from 'react';
import Modal from './modal/Modal';

export default function App() {
	const [IsOpen, setIsOpen] = useState(false);
	const [Color, setColor] = useState('black');

	const changeColor = (color) => {
		setColor(color);
	};
	return (
		<>
			<button
				onClick={() => {
					changeColor('green');
				}}
			>
				green
			</button>
			<h1 style={{ color: Color }}>부모 컴포넌트</h1>
			<button onClick={() => setIsOpen(!IsOpen)}>{IsOpen ? '모달 닫기' : '모달 열기'}</button>
			{IsOpen && <Modal />}
		</>
	);
}
