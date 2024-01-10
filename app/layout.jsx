import Header from '../components/header/header';
import './styles/globals.scss';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';

// npm i clsx

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-roboto',
});

const isRoboto = false;

export const metadata = {
	title: '메인페이지',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/* clsx 활용 시, 변수에 조건문 적용 가능  */}
			<body className={clsx('wrap', isRoboto && roboto.variable)}>
				<Header />
				<h1>Google Font</h1>
				{children}
			</body>
		</html>
	);
}

/*
	Next 에서의 기능별 컴포넌트 구분

	- Page Component : 페이지로 출력될 틀 컴포넌트 (about/page.jsx, gallery/page.jsx 등..)
		# 따로 설정을 하지 않으면 기본적으로 server에서 동작되어서 prepage로 사전 렌더링 처리.

	- Partial Component : 한 페이지 안쪽에서 호출되면서, 부분적인 UI나 기능을 담당하는 컴포넌트 (components/header.jsx, components/popup.jsx 등..)
		
*/
