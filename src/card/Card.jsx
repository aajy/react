import './Card.scss';
export default function Card(props) {
	console.log('props: ', props);
	return (
		<article className='Card '>
			<div className='bgBox' style={{ backgroundColor: props.colorName }}></div>
			<div className='txtBox'>
				{props.index + 1}-{props.colorName}
			</div>
		</article>
	);
}
