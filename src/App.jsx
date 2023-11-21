export default function App() {
	const name = '홍길뚱';
	const cl_name = 'wrap';
	const changeButton = (e, txt) => {
		e.target.innerText = txt;
	};
	return (
		<>
			<section className={cl_name}>
				<h1>안녕하세요. 제 이름은 {name} 입니다.</h1>
				<button onClick={(e) => changeButton(e, '버튼이름')}>이름 변경</button>
			</section>
		</>
	);
}
