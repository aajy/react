import React from 'react';

export default function News() {
	const handleClick = (e) => {
		console.log(e);
		console.log(e.currentTarget.innerText);
	};
	return (
		<article>
			<h2>Title comes here.</h2>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, enim?</p>
			<a href='#' onClick={(e) => handleClick(e)}>
				View Detail
			</a>
		</article>
	);
}
