/*
	[ Skip Routing ]
	: 특정 라우터 경로를 생략
	: 개발 여건상, 부득이하게 중첩된 페이지 컴포넌트가 많아질 경우 (depth가 깊어지는 경우) URL이 복잡해지는 것을 방지하기 위해서, 
		중간 단계의 폴더명을 (폴더명) 처럼 () 괄호로 묶어놓으면, 해당 폴더명 라우터 경로를 skip 가능.
*/

export default function ProductA() {
	return (
		<div className='productA'>
			<h3>ProductA</h3>
		</div>
	);
}
