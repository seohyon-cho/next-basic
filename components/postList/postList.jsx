// 동적인 내용을 담고 있는 부분만 따로 컴포넌트로 분리
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PostList() {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		// 이렇게 useEffect 안에 직접 넣으면 의존성배열 넣고 + useCallback 사용하는 것 안 해도 됨 (코드 가독성이 좀 떨어지긴 하지만)
		const fetchPosts = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			setPosts(result);
		};

		fetchPosts('https://jsonplaceholder.typicode.com/posts');
	}, []);

	return (
		<ul>
			{Posts.map((post, idx) => {
				if (idx >= 10) return null;
				return (
					<li key={post.id}>
						<Link href={`/post/${post.id}`}>{post.title}</Link>
					</li>
				);
			})}
		</ul>
	);
}
