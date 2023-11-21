import Card from './card/Card';

export default function App() {
	const colors = ['orange', 'hotpink', 'aqua', 'violet', 'green'];
	return (
		<>
			<h1>Color Chart</h1>
			<ul>
				{colors.map((color, idx) => {
					return <Card key={color + idx} colorName={color} index={idx} />;
				})}
			</ul>
		</>
	);
}
