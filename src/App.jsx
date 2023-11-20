import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';
import News from './components/sub/News';
import '../src/scss/style.scss';

function App() {
	return (
		<>
			<Header />
			<Visual />
			<section>
				<News />
				<News />
				<News />
				<News />
			</section>
			<Footer />
		</>
	);
}

export default App;
