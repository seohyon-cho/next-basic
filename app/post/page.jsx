'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Post() {
	const [Post, setPost] = useState([]);
	console.log(Post);

	useEffect(() => {
		fetch('/api/requestPost')
			.then((data) => data.json())
			.then((json) => {
				setPost(json.result);
			});
	}, []);

	return (
		<div>
			{Post.map((post) => {
				return (
					<article key={post.name}>
						<Link href={`/post/${post.id}`}>
							<h2>{post.name}</h2>
						</Link>
					</article>
				);
			})}
		</div>
	);
}
