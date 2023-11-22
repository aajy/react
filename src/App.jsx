import { useEffect, useState } from 'react';
import './App.scss';
export default function App() {
	const [Num, setNum] = useState(0);
	//의존성 배열 미등록시 컴포넌트가 재랜더링 될때 계속 호출
	useEffect(() => {
		console.log('tests');
	});
	//의존성 배열을 비워두면 컴포넌트가 초기 마운트 될때 한번만 실행
	useEffect(() => {
		console.log('tests');
	}, []);
	return (
		<>
			<div className='wrap'>
				<button onClick={() => setNum(Num + 1)}>change NUmber</button>
				<h1>{Num}</h1>
			</div>
		</>
	);
}
