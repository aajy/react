import { useEffect, useRef, useState } from 'react';
import './App.scss';
export default function App() {
	const [count, setCount] = useState(0);
	const prevCountRef = useRef();

	useEffect(() => {
		// 컴포넌트가 업데이트될 때마다 현재 상태를 prevCountRef에 저장
		prevCountRef.current = count;
	});

	const handleIncrement = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<p>Current Count: {count}</p>
			<p>Previous Count: {prevCountRef.current}</p>
			<button onClick={handleIncrement}>Increment</button>
		</div>
	);
}
