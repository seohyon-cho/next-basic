'use client';
// import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
	// 해당 dynamic routing 페이지 컴포넌트가 호출된 조건이, <Link> 컴포넌트에 의해서 호출된 경우라면,
	// useParams 훅을 별도로 사용하지 않더라도 자동으로 props를 통해서 params 객체가 받아짐.
	// useParams 를 사용하는 경우 : <Link>가 아닌 특정 핸들러 함수를 통해서 동적으로 호출될 때 useParams를 통해 수동으로 직접 params 값을 가져와 활용해야 할 때
	const { num } = params;
	const [Post, setPost] = useState(null);

	useEffect(() => {
		const fetchPostById = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			setPost(result);
		};

		fetchPostById(`https://jsonplaceholder.typicode.com/posts/${num}`);
	}, [num]);

	return (
		<div>
			<h3>{num + '번째 유튜브 상세 페이지'}</h3>
			<h2>{Post?.title}</h2>
			<p>{Post?.body}</p>
		</div>
	);
}
