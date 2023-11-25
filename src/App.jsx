import './App.scss';
import data from '../src/DB/department.json';
import { useEffect,useState } from 'react';

export default function App() {
	const [Members,setMembers] = useState([]);
	const colors =['red','orangered', 'orange','lightgoldenrodyellow','yellowgreen','cornflowerblue']
useEffect(()=>{
	setMembers(data.members);
	console.log(data);
},[]);
	return (
		<div className="wrap">
			{ Members.map((el, index)=>{
				return <div className='box' style={{borderColor:`${colors[index]}`, color:`${colors[index]}`,}}>
				<span style={{backgroundColor:`${colors[index]}`, borderColor:`${colors[index]}`}}></span>
				<div className='boxRight'>
					<span style={{borderColor:`${colors[index]}`}}>{el.name}</span>
					<span>{el.position}</span>
				</div>
			</div>
})}
		</div>
	);
}
