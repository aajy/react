import './App.scss';
import data from '../src/DB/department.json';
import { useEffect,useState } from 'react';

export default function App() {
	const [Members,setMembers] = useState([]);
useEffect(()=>{
	setMembers(data.members);
	console.log(data);
},[]);
	return (
		<div className="wrap">
			{ Members.map((el, index)=>{
				return <div>
				<span>{el.name}</span>
				<span>{el.position}</span>
				<span>{el.pic}</span>
			</div>
})}
		</div>
	);
}
