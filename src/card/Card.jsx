import './Card.scss';
export default function Card({ img, title = 'Title$', index = '$' }) {
	return (
		<article className='Card '>
			<img src='' alt='' />
			<div className='textBox'>
				<span>0{index + 1}</span>
				<p>{title}</p>
			</div>
		</article>
	);
}
