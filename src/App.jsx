import Card from './card/Card';

export default function App() {
	const colors = ['orange', 'hotpink', 'aqua', 'violet', 'green'];
	const width = [100, 200, 300, 400, 500];
	return (
		<>
			<h1>Color Chart</h1>
			{colors.map((color, idx) => {
				return (
					<Card
						key={color + idx}
						colorName={color}
						index={idx}
						width={width[idx]}
						istxtVisible={width[idx] > 200 ? true : false}
					/>
				);
			})}
		</>
	);
}
