import './Box.scss';
export default function Box() {
	const changeBGColor = (e, color) => {
		e.target.style.backgroundColor = color;
	};
	return (
		<div className='Box ' onClick={(e) => changeBGColor(e, 'hotpink')}>
			Box
		</div>
	);
}
