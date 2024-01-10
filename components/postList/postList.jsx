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
						<Link href={`/post/${post.id}`} prefetch={true}>
							{post.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

/*
	Next에서는 Link 컴포넌트를 이용해서 Router 연결 시, PreFetch 기능 적용.
	해당 Router에 mapping 되어 있는 컴포넌트 데이터를 해당 컴포넌트 페이지에서 쓰이지 않고 있더라도 
	미리 백단에서 prefetch 처리함으로서, 추후 라우터를 클릭 했을 때 보다 빠르게 페이지 전환이 가능하도록 처리함. 

	prefetch 기능은, 개발 버전에서는 확인이 불가하고 npm run build로 빌드한 뒤, npm run start를 써서 production모드로 구동해야지만 확인 가능함. 

	Next14에서 달라진 prefetching 동작 방식
	- 기존 Next13 : 실제 그 Link 컴포넌트 위에 마우스를 호버해야 prefetch 일어남. 
	- 새로운 Next14 : 마우스 호버하지 않더라도, Link 컴포넌트 내에서 중요한 데이터는 모두 자체적으로 prefetch 처리. 

	기본적으로 Link 컴포넌트에는 prefetch={true} 옵션을 넣으면 기능 활성화, prefetch={false} 옵션을 넣으면 기능 비활성화 처리 가능함. 
*/
