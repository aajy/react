import { useEffect, useState } from 'react';
import './App.scss';
export default function App() {
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
	return (
		<>
			<div className='wrap'>
				<input type='text' name='first' value={DataObj.first} onChange={changeInput} />
				<input type='text' name='second' value={DataObj.second} onChange={changeInput} />
			</div>
		</>
	);
}
