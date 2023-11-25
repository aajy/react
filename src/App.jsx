import './App.scss';
import data from '../src/DB/department.json';
import { useEffect,useState } from 'react';

export default function App() {
	const [Members,setMembers] = useState([]);
	const colors =['red','orangered', 'orange','lightgoldenrodyellow','yellowgreen','cornflowerblue']

	const filter = (e) => {
		const arr = [...Members];
		const name = e.target.innerText;
		const member = arr.filter(el=>el.name===name);
		console.log('member: ', member);
		setMembers(member);
	}
useEffect(()=>{
	setMembers(data.members);
	console.log(data);
},[]);
	return (
		<div className="wrap">
			<div className='filter'>
				<button onClick={(e)=>filter(e)}>David</button>
				<button onClick={(e)=>filter(e)}>Emily</button>
				<button onClick={(e)=>filter(e)}>Emma</button>
			</div>
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
