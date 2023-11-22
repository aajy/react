import { useEffect, useState } from 'react';
import './App.scss';
import { useRef } from 'react';
export default function App() {
	const inputRef = useRef(null);
	const [DataObj, setDataObj] = useState({
		first: '',
		second: '',
	});
	const changeInput = (e) => {
		setDataObj({ ...DataObj, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		console.log(DataObj);
	}, [DataObj]);
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<>
			<div className='wrap'>
				<input type='text' name='first' value={DataObj.first} onChange={changeInput} ref={inputRef} />
				<input type='text' name='second' value={DataObj.second} onChange={changeInput} />
			</div>
		</>
	);
}
