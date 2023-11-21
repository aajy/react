import './Card.scss';
export default function Card(props) {
	const style = {
		width: props.width,
	};
	return (
		<article className='Card ' style={style}>
			<div className='bgBox' style={{ backgroundColor: props.colorName }}></div>
			{props.istxtVisible && (
				<div className='txtBox'>
					{props.index + 1}-{props.colorName}
				</div>
			)}
		</article>
	);
}
