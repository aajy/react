import './Card.scss';
export default function Card({ colorName, index, width, istxtVisible }) {
	const style = {
		width: width,
	};
	return (
		<article className='Card ' style={style}>
			<div className='bgBox' style={{ backgroundColor: colorName }}></div>
			{istxtVisible && (
				<div className='txtBox'>
					{index + 1}-{colorName}
				</div>
			)}
		</article>
	);
}
