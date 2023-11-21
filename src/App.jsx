import './scss/style.scss';
import Card from './card/Card';
import pic1 from './img/pic1.png';
import pic2 from './img/pic2.png';
import pic3 from './img/pic3.png';

export default function App() {
	const info = [
		{
			img: pic1,
			title: 'Healthcare',
		},
		{
			img: pic2,
			title: 'Oil and Gas',
		},
		{
			img: pic3,
			title: 'AgriBusiness',
		},
	];
	return (
		<>
			<div className='wrap'>
				<div className='top'>
					<h1>Our Industry specializtion</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint fuga suscipit ab
						repudiandae rerum totam ut blanditiis? Quos, adipisci.
					</p>
				</div>
				<div className='CardBox'>
					{info.map((obj, index) => {
						return <Card img={obj.img} title={obj.title} index={index} key={obj.title + index} />;
					})}
				</div>
			</div>
		</>
	);
}
