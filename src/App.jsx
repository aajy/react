import './App.scss';
import members from '../src/DB/department.json';
import { useEffect,useState } from 'react';

export default function App() {
	const [Members,setMembers] = useState([]);
useEffect(()=>{
	console.log(members);
	setMembers(members);
},[]);
	return (
		<div className="wrap">
			<div>{}</div>
		</div>
	);
}
