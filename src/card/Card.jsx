import './Card.scss';
export default function Card({ colorName = '#666', index = 0, width = 100, istxtVisible = true }) {
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
