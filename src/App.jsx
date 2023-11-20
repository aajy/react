import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';
import News from './components/sub/News';
import '../src/scss/style.scss';

function App() {
	const colors = ['red', 'orange', 'yellow', 'lightgreen', 'cornflowerblue'];
	let isPop = true;
	return (
		<>
			<Header />
			<Visual />
			<h1 style={{ color: 'orange', fontSize: 50 }}>News</h1>
			<section>
				<div>
					{colors.map((color, idx) => {
						return <News color={color} />;
					})}
				</div>
			</section>
			{/* {isPop ? <aside className='modal'>레이어 팝업</aside> : null} */}
			{isPop && <aside className='modal'>레이어 팝업</aside>}
			<Footer />
		</>
	);
}

export default App;
