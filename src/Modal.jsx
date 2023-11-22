import { useEffect } from 'react';

export default function Modal() {
	const style = {
		width: 300,
		height: 200,
		backgroundColor: '#222',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 40,
		color: '#fff',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	};
	useEffect(() => {
		console.log('modal mount');
		return () => {
			console.log('modal unmount');
		};
	}, []);
	return (
		<div className='Modal' style={style}>
			Modal
		</div>
	);
}
