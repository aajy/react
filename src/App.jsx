import Modal from './modal/Modal';

export default function App() {
	console.log('App re-rendered');
	let IsOpen = false;
	const handleModal = () => {
		console.log('handlemodal called');
		IsOpen = true;
	};
	return (
		<>
			<h1>부모 컴포넌트</h1>
			<button onClick={handleModal}>modal {IsOpen ? 'close' : 'open'}</button>
			{IsOpen && <Modal />}
		</>
	);
}
