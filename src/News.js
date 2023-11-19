function News() {
	const fontStyle = {
		color: 'aqua',
		fontSize: 60,
	};
	return (
		<article>
			<h2 style={{ color: 'orange', fonSize: 50 }}>News</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, recusandae.</p>
			<p style={fontStyle}>view detail</p>
		</article>
	);
}

export default News;
