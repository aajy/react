import { useRef } from 'react';
import './App.scss';
export default function App() {
	const box = useRef(null);
	const count = useRef(0);
	const boxStyle= {
		border: '1px solid #333',
		width:300,
		height:300,
		transition:'0.5s',
		marginTop:100
	}
	const plus = () => {
		count.current = count.current + 1;
		box.current.style.transform = `rotate(${count.current*45}deg)`;
	}
	const minus = () => {
		count.current = count.current - 1;
		box.current.style.transform = `rotate(${count.current*45}deg)`;
	}
	return (
		<div className="wrap">
			<button onClick={()=>plus()}>left</button>
			<button onClick={()=>minus()}>right</button>
			
			<article style={boxStyle} ref={box}></article>
		</div>
	);
}
