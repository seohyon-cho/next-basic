'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetail() {
	const { num } = useParams();
	const [Post, setPost] = useState(0);

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
			<h2>{Post.title}</h2>
			<p>{Post.body}</p>
		</div>
	);
}
