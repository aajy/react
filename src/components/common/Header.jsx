import { useContext } from 'react';
import { AgeContext } from './AgeContext';
import { NameContext } from './NameContext';

export default function Header() {
	const age = useContext(AgeContext);
	const user = useContext(NameContext);
	return (
		<header>
			<p>
				환영합니다. {user}님의 나이는 {age}입니다.
			</p>
		</header>
	);
}
