import React from 'react';

export default function News(props) {
	const handleClick = (e) => {
		console.log(e);
		console.log(e.currentTarget.innerText);
	};
	const changeBg = (e, color) => {
		e.target.style.backgroundColor = color;
	};
	return (
		<article onClick={(e) => changeBg(e, props.color)}>
			<h2>Title comes here.</h2>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, enim?</p>
			<a href='#' onClick={(e) => handleClick(e)}>
				View Detail
			</a>
		</article>
	);
}
